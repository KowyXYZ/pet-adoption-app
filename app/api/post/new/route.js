
import { connectToDB } from "@/utils/database";

export const POST = async(req, res) => {

    
    try {
        await connectToDB();

        
        return new Response(JSON.stringify(), {status: 200});
    } catch (error) {
        console.error('Failed to createPost:', error);
        return new Response("Failed to createPost", {status: 500});
    }
};