import { Schema, model } from 'mongoose'

const commentSchema = Schema(
    {
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true
        },
        author: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        }
    }, { 
        timestamps: true, 
        versionKey: false 
    }
)

export default model('Comment', commentSchema)