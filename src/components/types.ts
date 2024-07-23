export interface Character {
    id: number;
    image: string;
    species: string;
    status: string;
    name: string;
    gender: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
}

export interface Filters {
    species: string | null;
    status: string | null;
    gender: string | null;
    name: string;
}