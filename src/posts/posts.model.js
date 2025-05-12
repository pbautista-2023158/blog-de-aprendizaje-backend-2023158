import { Schema, model } from 'mongoose'

const postSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        course: {
            type: String,
            enum: ['Taller III', 'Tecnologia III', 'Practica Supervisada'],
            required: true
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'             
        }]
    }, { 
        timestamps: true, 
        versionKey: false 
    }
)

export default model('Post', postSchema)