import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String
    },
    posts: {
        type: Array
    },
    favorites: {
        type: Array
    },
    description: {
        
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        text: {
            type: String,
        },
        location: {
            type: String,
        }
    },
    messages: {
        type: Array
    }
})

const User = models.User || model("User", UserSchema);

export default User;