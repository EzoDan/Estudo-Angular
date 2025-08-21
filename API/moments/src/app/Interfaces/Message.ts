export interface Message {
    id: string;
    content: string;
    senderId: string;
    receiverId: string;
    createdAt: Date;
    updatedAt?: Date;
    isRead?: boolean;
    attachments?: string[];
}