
import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const PATCH = async(req, res) => {

    const {text, email, phone,location, id } = await req.json()

    try {
        await connectToDB();

        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: {
                'description.email': email || undefined,
                'description.phone': phone || undefined,
                'description.text': text || undefined,
                'description.location': location || undefined
            }
        })

        if (!updatedUser) {
            return new Response('ERROR NOT UPDATED USER!')
        }
        
        return new Response(JSON.stringify(updatedUser), {status: 200});
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return new Response("Failed to Fetch user", {status: 500});
    }
};