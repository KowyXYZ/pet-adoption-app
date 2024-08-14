import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import Post from "@/models/post";

export const POST = async (req, res) => {
    const { userId, postId } = await req.json();

    try {
        await connectToDB();

        // Find the single post and user
        const singlePost = await Post.findById(postId);
        const singleUser = await User.findById(userId);
        
        // Check if the post is already in the user's favorites
        const isAlreadyFavorite = singleUser.favorites.some(e => e._id.toString() === postId);

        if (!isAlreadyFavorite) {
            // If not, push the post into the favorites array
            singleUser.favorites.push(singlePost);
            await singleUser.save();
        }

        return new Response(JSON.stringify(singleUser), { status: 200 });
    } catch (error) {
        console.error('Failed to fetch:', error);
        return new Response("Failed to Fetch", { status: 500 });
    }
};
