import postRoutes from "../src/posts/posts.routes.js"
import commentRoutes from "../src/comments/comments.routes.js"

export const rutasGenerales = (app) => {
    app.use("/api/posts", postRoutes)   
    app.use("/api/comments", commentRoutes) 
}