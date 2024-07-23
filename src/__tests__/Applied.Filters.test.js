import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppliedFilters from '../components/AppliedFilters';

test('renders nothing when no filters are applied', () => {
    const filters = {
        name: '',
        status: '',
        species: '',
    };

    const { container } = render(<AppliedFilters filters={filters} />);
    expect(container.firstChild).toBeNull();
});

test('renders applied filters', () => {
    const filters = {
        name: 'Rick',
        status: 'Alive',
        species: 'Human',
    };

    const { getByText } = render(<AppliedFilters filters={filters} />);
    expect(getByText('Name:')).toBeInTheDocument();
    expect(getByText('Rick.')).toBeInTheDocument();
    expect(getByText('Status:')).toBeInTheDocument();
    expect(getByText('Alive.')).toBeInTheDocument();
    expect(getByText('Species:')).toBeInTheDocument();
    expect(getByText('Human.')).toBeInTheDocument();
});
