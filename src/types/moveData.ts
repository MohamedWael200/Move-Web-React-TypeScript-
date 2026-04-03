export type moveDataApiResponse = {
    data : moveData[];
}

export type Category = {
    id: number;
    name: string;
    slug: string;
};

export type moveData = {
    id: number;
    name: string;
    image: string;
    brief: string;
    author: string;
    Director: string;
    rating: number;
    dateOfPublication: string;
    categories: Category[];
}