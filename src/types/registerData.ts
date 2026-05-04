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

export type profileDataApiResponse = {
    data : ProfilePayload;
}


export type ProfilePayload = {
    id : number;
    name: string;
    email: string;
    avatar: string | null;
    bio: string;
}