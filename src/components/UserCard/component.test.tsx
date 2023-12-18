import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from './UserCard';

describe('UserCard Component', () => {
    const mockUser = {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        email: 'john@example.com',
        picture: 'path/to/picture.jpg',
        street: '123 Main St',
        city: 'Anytown',
        state: 'State',
        postcode: '12345',
        phone: '123-456-7890',
        cell: '098-765-4321',
        isFavorite: true
    };

    it('displays user information', () => {
        render(<UserCard user={mockUser} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('johndoe')).toBeInTheDocument();
        expect(screen.getByText('john@example.com')).toBeInTheDocument();
        expect(screen.getByAltText('John Doe')).toHaveAttribute('src', 'path/to/picture.jpg');
    });

    it('opens and displays modal with more details on click', () => {
        render(<UserCard user={mockUser} />);
        fireEvent.click(screen.getByText('John Doe'));
        expect(screen.getByText('Username: johndoe')).toBeInTheDocument();
        expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
        expect(screen.getByText('Street: 123 Main St')).toBeInTheDocument();
        expect(screen.getByText('City: Anytown')).toBeInTheDocument();
        expect(screen.getByText('State: State')).toBeInTheDocument();
        expect(screen.getByText('Postcode: 12345')).toBeInTheDocument();
        expect(screen.getByText('Phone: 123-456-7890')).toBeInTheDocument();
        expect(screen.getByText('Cell: 098-765-4321')).toBeInTheDocument();
    });

    it('closes the modal when the close button is clicked', () => {
        render(<UserCard user={mockUser} />);
        // Open the modal
        fireEvent.click(screen.getByText('John Doe'));
        // Assuming the modal has a close button
        fireEvent.click(screen.getByText('Close'));
        // The modal content should not be visible now
        expect(screen.queryByText('Email: john@example.com')).toBeNull();
    });
    
    it('displays favorite icon correctly', () => {
        render(<UserCard user={mockUser} />);
        expect(screen.getByText('★')).toBeInTheDocument(); // Filled star for favorite
    });
});
