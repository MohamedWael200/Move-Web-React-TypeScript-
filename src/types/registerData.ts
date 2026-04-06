export type registerPayload = {
    name: string;
    email: string;
    password: string;
    bio: string;
    avatar: File | null;
}

export type LoginPayload = {
    email: string;
    password: string;
};