
import { connectToDB } from "@/utils/database";

import Post from "@/models/post";

export const POST = async(req, res) => {

    const {
        creator,
        name,
        breed,
        size,
        gender,
        age,
        color,
        text,
        image,
        location,
        creatorId,
        canLiveWithChildren,
        vaccinated,
        houseTrained,
        neutrated,
        microchipped,
        adressOne,
        adressTwo,
        city,
        postCode} = await req.json()


    try {
        await connectToDB();
        
        const newPost =  new Post({
                   creator: creator,
                    name: name,
                    breed: breed,
                    size: size,
                    gender: gender,
                    age: age,
                    color: color,
                    text: text,
                    image: image,
                    location: location,
                    creatorId: creatorId,
                    canLiveWithChildren: canLiveWithChildren,
                    vaccinated: vaccinated,
                    houseTrained: houseTrained,
                    neutrated: neutrated,
                    microchipped: microchipped,
                    adressOne: adressOne,
                    adressTwo: adressTwo,
                    city: city,
                    postCode: postCode
        })

        await newPost.save()
        
        return new Response(JSON.stringify(newPost), {status: 200});
    } catch (error) {
        console.error('Failed to createPost:', error);
        return new Response("Failed to createPost", {status: 500});
    }
};