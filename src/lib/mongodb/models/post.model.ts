import mongoose, { model, models } from "mongoose";

const postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: { type: String },
    type: { type: String, required: true },
    post: { type: String, required: true },
    department: { type: String, required: true },
    posting: { type: String, required: true },
    requirements: { type: [String], required: true },
    closing: { type: Date, required: true },
    visibility: { type: String, required: true },
    positions: { type: String, required: true },
});

// const JobPost = mongoose.model('JobPost', postSchema);
const JobPost = model('JobPost', postSchema);


export default JobPost;
