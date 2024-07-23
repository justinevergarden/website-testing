import { useState } from 'react';
import Button from './Button';

interface SearchComponentProps {
    setSearch: (value: string) => void;
    setFilters: (value: {
        species: string;
        status: string;
        name: string;
        gender: string;
    }) => void;
    setCurrentPage: (value: number) => void;
    setFiltering: (value: boolean) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
    setSearch,
    setFilters,
    setCurrentPage,
    setFiltering,
}) => {
    const [inputValue, setInputValue] = useState('');

    const searchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearch(inputValue);
        setCurrentPage(1); // Reset the current page to 1
    };

    const resetBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setInputValue('');
        setSearch('');
        setFiltering(false);
        setFilters({
            species: '',
            status: '',
            name: '',
            gender: '',
        });
    };

    return (
        <form className="gap-3 sm:gap-4 sm:ml-0 mb-5 flex justify-center sm:justify-start h-10">
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search for characters"
                type="text"
                className="pt-2 pb-2 w-44 rounded-lg text-center"
            />
            <Button btn={searchBtn} nameBtn="Search" />
            <Button btn={resetBtn} nameBtn="Reset" />
        </form>
    );
};

export default SearchComponent;
