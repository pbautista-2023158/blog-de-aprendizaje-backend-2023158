import Post from "../posts/posts.model.js"

const defaultPosts = [
    {
        title: "Laboratorio #4",
        description: "Ejercicios de lógica con JavaScript en plataforma HackerRank",
        course: "Taller III",
        createdAt: "2025-05-14"
    },
    {
        title: "Infografía de React",
        description: "Realize una infografía sencilla sobre los diferentes componentes de React.",
        course: "Tecnologia III",
        createdAt: "2025-05-14"
    },
    {
        title: "Exposición Grupal #1",
        description: "Frameworks para aplicaciones híbridas.",
        course: "Practica Supervisada",
        createdAt: "2025-05-14"
    }        
]

export const createDefaultPosts = async () => {
    try {
        const existingPosts = await Post.countDocuments()

        if(existingPosts === 0){
            await Post.insertMany(defaultPosts)
            console.log('Posts por defecto creados exitosamente.')
        }
    } catch (error) {
        console.error('Error general.', error);        
    }
}