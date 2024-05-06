export type CreateJobPostParams = {
    description: string;
    type: string;
    post: string;
    department: string;
    posting: string;
    requirements: string[];
    closing: Date;
    visibility: string;
    positions: string;
}