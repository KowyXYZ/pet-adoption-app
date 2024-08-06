
import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import Post from "@/models/post";

export const GET = async(req, res) => {
    try {
        await connectToDB();



        return new Response(JSON.stringify(), {status: 200});
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return new Response("Failed to Fetch user", {status: 500});
    }
};