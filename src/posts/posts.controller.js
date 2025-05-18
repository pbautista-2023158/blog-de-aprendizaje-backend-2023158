import Post from "../posts/posts.model.js"

export const createPost = async(req, res) => {
    try {
        const { title, description, course } = req.body
        if(!title || !description || !course){
            return res.status(400).send(
                { 
                    message: "Faltan campos obligatorios." 
                }
            )             
        }

        const newPost = new Post(req.body)
        const savedPost = await newPost.save()
        return res.status(201).send(
            {
                success: true,
                message: 'El post se realizo con exito.',
                savedPost
            }
        )
    } catch (error) {
        console.error(error)
        return res.status(500).send(
            {
                message: "Error al crear el post.",
                error: error.message
            }
        )       
    }
}

export const getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find()
        .populate({
            path: 'comments',
            select: 'author content'
        })
        .select('title description course comments createdAt')

        return res.status(200).send(
            {
                success: true,
                message: "Posts encontrados:",
                posts
            }
        )
    } catch (error) {
        console.error(error)
        return res.status(500).send(
            {
                message: "Error al obtener los posts.",
                error: error.message
            }
        )          
    }
}

export const getPostsByCourse = async (req, res) => {
    try {
        const { course } = req.query
        const validCourses = ['Taller III', 'Tecnologia III', 'Practica Supervisada']

        if (!course) {
            return res.status(400).send({ message: "Se debe proporcionar el parámetro 'curso'." });
        }

        if (!validCourses.includes(course)) {
            return res.status(400).send({
                message: "Curso inválido. Los cursos válidos son: Taller III, Tecnologia III, Practica Supervisada"
            })
        }
        const posts = await Post.find({ course: course })
            .populate({
                path: 'comments',
                select: 'author content createdAt'
            })
            .select('title description course comments createdAt')

        return res.status(200).send({
            success: true,
            message: `Posts del curso ${course}:`,
            posts
        });
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            message: "Error al obtener los posts por curso",
            error: error.message
        })
    }
}