import Post from "../posts/posts.model.js"
import Comment from  "../comments/comments.model.js"

export const createComment = async(req, res) => {
    try {
        const { post, author, content } = req.body
        if(!post || !author || !content){
            return res.status(400).send(
                { 
                    message: "Faltan campos obligatorios." 
                }
            )               
        }

        const existingPost = await Post.findById(post)
        if(!existingPost) {
            return res.status(404).send(
                {
                    message: "Post no encontrado."
                }
            )
        }

        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        existingPost.comments.push(savedComment)
        await existingPost.save()

        return res.status(201).send(
            {
                success: true,
                message: 'El comentario se realizo con exito.',
                savedComment
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