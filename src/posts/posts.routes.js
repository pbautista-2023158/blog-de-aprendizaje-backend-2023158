import { Router } from "express"
import { createPost, getAllPosts, getPostsByCourse } from "./posts.controller.js"

const api = Router()

api.post("/addPost", createPost)
api.get("/getAllPosts", getAllPosts)
api.get("/getPostsByCourse", getPostsByCourse)

export default api