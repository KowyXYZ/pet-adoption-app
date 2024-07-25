
import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    creator: {
        type: 'String',
        required: [true, 'creator is requred']
    },
    name: {
        type: 'String',
        required: [true, 'Text is Required'],
    },
    breed: {
        type: 'String',
        required: [true, 'Tag is required']
    },
    size: {
        type: 'String'
    },
    gender: {
        type: "string"
    },
    age: {
        type: "string"
    },
    color: {
        type: 'String'
    },
    text: {
        type: 'String'
    },
    image: {
        type: 'String'
    },
    location: {
        type: 'String'
    },
    creatorId: {
        type: 'String'
    }
})

const Post = models.Post || model('Post', postSchema)

export default Post