import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();
    console.log("values are", prompt);

    try {
        await connectToDb();
        console.log("values are", prompt);

        const newPrompt = new Prompt({
        creator: userId,
        prompt,
        tag,
        });
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {

        console.log("Error while creating a post", error);
        return new Response("Failed to create a new Prompt", { status: 500 });
    }
};
