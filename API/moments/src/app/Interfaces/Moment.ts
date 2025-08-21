export interface Moment {
    id: string;
    title: string;
    description: string;
    image: string;
    location?: string;
    createdAt?: Date;
    updatedAt?: Date; 
    comments?: [ { text: string; username: string } ];   
}