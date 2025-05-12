import { Router } from "express"
import { createComment } from "./comments.controller.js"

const api = Router()

api.post("/addComment", createComment)

export default api