import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Status from '../components/Status';

describe('Status component', () => {
    test('should render with green background when status is Alive', () => {
        const { container } = render(<Status item={{ status: 'Alive' }} />);
        expect(container.firstChild).toHaveClass('bg-green-700');
    });

    test('should render with red background when status is Dead', () => {
        const { container } = render(<Status item={{ status: 'Dead' }} />);
        expect(container.firstChild).toHaveClass('bg-red-700');
    });

    test('should render with zinc background when status is unknown', () => {
        const { container } = render(<Status item={{ status: 'Unknown' }} />);
        expect(container.firstChild).toHaveClass('bg-zinc-700');
    });
});
