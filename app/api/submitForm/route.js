
import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import Post from "@/models/post";

export const POST = async(req, res) => {

    const { postid, formState, newId } = await req.json()

    try {
        await connectToDB();

        const singlePost = await Post.findById(postid)

        const singleUser = await User.findById(singlePost.creatorId)

        singleUser.messages.push(formState)

        await singleUser.save();

        return new Response(JSON.stringify(singleUser), {status: 200});
    } catch (error) {
        console.error('Failed to fetch :', error);
        return new Response("Failed to Fetch ", {status: 500});
    }
};