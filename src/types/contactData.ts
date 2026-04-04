export type contactDataApiResponse = {
    contacts : ContactPayload[];
}
export type ContactPayload = {
    id: number;
    name: string;
    email: string;
    message: string;
    created_at: string;
    updated_at: string;
}