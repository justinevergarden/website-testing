import axios from 'axios';
import { Character } from './types';
import { Filters } from './types';

interface FetchCharactersProps {
    search: string;
    setCharacters: (characters: Character[]) => void;
    setTotalPages: (pages: number) => void;
    filters: Filters;
    currentPage: number;
}

const FetchCharacters = async ({
    search,
    setCharacters,
    setTotalPages,
    filters,
}: FetchCharactersProps) => {
    let url = 'https://rickandmortyapi.com/api/character';

    // Adds search parameters and filters to the URL
    const params = new URLSearchParams();
    if (search) params.append('name', search);
    if (filters.species) params.append('species', filters.species);
    if (filters.status) params.append('status', filters.status);
    if (filters.gender) params.append('gender', filters.gender);
    url += `?${params.toString()}`;

    let allCharacters: Character[] = [];

    try {
        let response = await axios.get(url);
        let data = response.data;
        allCharacters = allCharacters.concat(data.results);

        while (data.info.next) {
            response = await axios.get(data.info.next);
            data = response.data;
            allCharacters = allCharacters.concat(data.results);
        }

        setCharacters(allCharacters);
        setTotalPages(Math.ceil(allCharacters.length / 20));
    } catch (error) {
        setCharacters([]);
        setTotalPages(0);
    }
};

export default FetchCharacters;
