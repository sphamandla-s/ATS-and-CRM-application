import { CreateJobPostParams } from "@/types"
import { connectToDatabase } from "../mongodb"
import JobPost from "../mongodb/models/post.model"
import { handleError } from "../utils"


export async function createJobPost(post: CreateJobPostParams) {
    try {
        await connectToDatabase()

        const newJobPost = await JobPost.create(post)
        return JSON.parse(JSON.stringify(newJobPost))
    } catch (error) {
        handleError(error)
    }
}