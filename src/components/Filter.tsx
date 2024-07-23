import { Dropdown } from 'keep-react';
import { Dispatch, SetStateAction } from 'react';
import { Filters } from './types';
import {
    SquaresFour,
    Question,
    XCircle,
    CheckCircle,
    GenderNeuter,
    GenderFemale,
    GenderMale,
    SortAscending,
    SortDescending,
    Robot,
    Alien,
    Person,
    PawPrint,
    PersonSimple,
    Eye,
    SmileyNervous,
    LinuxLogo,
} from 'phosphor-react';

interface FilterProps {
    setFilters: Dispatch<SetStateAction<Filters>>;
    setFiltering: Dispatch<SetStateAction<boolean>>;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    filters: Filters;
}

const Filter = ({
    setFilters,
    setFiltering,
    setCurrentPage,
    filters,
}: FilterProps) => {
    return (
        <Dropdown
            label="Filter"
            dismissOnClick={false}
            floatingArrow={true}
            className="bg-rick hover:bg-morty text-black rounded-lg transform transition-transform duration-150 ease-in-out active:scale-90 h-10 w-80 sm:w-full"
        >
            <div className="flex justify-center m-2">
                <Dropdown
                    label="Name"
                    size="sm"
                    placement="right"
                    trigger="hover"
                    arrowIcon={false}
                    className="focus:outline-none border-none rounded-none w-36 bg-rick hover:bg-morty text-black"
                >
                    {' '}
                    <Dropdown.Item
                        icon={<SortAscending size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.name === 'A-Z' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                name: 'A-Z',
                            }));
                            setFiltering(true);
                            setCurrentPage(1); // Resets the current page to 1
                        }}
                    >
                        Sort A-Z
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SortDescending size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.name === 'Z-A' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                name: 'Z-A',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Sort Z-A
                    </Dropdown.Item>
                </Dropdown>
            </div>

            <div className="flex justify-center m-2">
                <Dropdown
                    label="Status"
                    size="sm"
                    placement="right"
                    trigger="hover"
                    arrowIcon={false}
                    className="focus:outline-none border-none rounded-none w-36 bg-rick hover:bg-morty text-black"
                >
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.status === null ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                status: null,
                            }));
                            setFiltering(false);
                            setCurrentPage(1);
                        }}
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<CheckCircle size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.status === 'Alive' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                status: 'Alive',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Alive
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<XCircle size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.status === 'Dead' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                status: 'Dead',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Dead{' '}
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Question size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.status === 'unknown' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                status: 'unknown',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Unknown
                    </Dropdown.Item>{' '}
                </Dropdown>
            </div>

            <div className="flex justify-center m-2">
                <Dropdown
                    label="Species"
                    size="sm"
                    placement="right"
                    trigger="hover"
                    arrowIcon={false}
                    className="focus:outline-none border-none rounded-none w-36 bg-rick hover:bg-morty text-black"
                >
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === null ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: null,
                            }));
                            setFiltering(false);
                            setCurrentPage(1);
                        }}
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Alien size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === 'Alien' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Alien',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Alien
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<PawPrint size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === 'Animal' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Animal',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Animal
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SmileyNervous size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === 'Cronenberg' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Cronenberg',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Cronenberg
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Person size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === 'Human' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Human',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Human
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<PersonSimple size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === 'Humanoid' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Humanoid',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Humanoid
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Eye size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === 'Mythological Creature'
                                ? 'bg-rick'
                                : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Mythological Creature',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Mythological Creature
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<LinuxLogo size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === 'Poopybutthole' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Poopybutthole',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Poopybutthole
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Robot size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === 'Robot' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Robot',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Robot
                    </Dropdown.Item>

                    <Dropdown.Item
                        icon={<Question size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.species === 'unknown' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'unknown',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Unknown
                    </Dropdown.Item>
                </Dropdown>
            </div>

            <div className="flex justify-center m-2">
                <Dropdown
                    label="Gender"
                    size="sm"
                    placement="right"
                    trigger="hover"
                    arrowIcon={false}
                    className="focus:outline-none border-none rounded-none w-36 bg-rick hover:bg-morty text-black"
                >
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.gender === null ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                gender: null,
                            }));
                            setFiltering(false);
                            setCurrentPage(1);
                        }}
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<GenderFemale size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.gender === 'Female' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                gender: 'Female',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Female
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<GenderNeuter size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.gender === 'Genderless' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                gender: 'Genderless',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Genderless
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<GenderMale size={20} color="#5E718D" />}
                        className={`whitespace-nowrap hover:bg-morty ${
                            filters.gender === 'Male' ? 'bg-rick' : ''
                        }`}
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                gender: 'Male',
                            }));
                            setFiltering(true);
                            setCurrentPage(1);
                        }}
                    >
                        Male
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </Dropdown>
    );
};

export default Filter;
