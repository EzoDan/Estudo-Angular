export interface Comment {
    id: string;
    content: string;
    username: string;
    postId: string;
    createdAt?: Date;
    updatedAt?: Date;
}