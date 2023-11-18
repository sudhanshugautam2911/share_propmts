import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDb();

        const prompts = await Prompt.find({}).populate('creator');
        
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        console.log("error while fetching prompts : ", error);

        return new Response("Failed to fetch prompts ", { status: 500 })

    }
}