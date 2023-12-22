import { Users } from '@/types';
import { fireEvent, render, screen } from '@testing-library/react';
import UserCard from '.';

interface User extends Users {
    isFavorite: boolean;
  }

describe('UserCard Component', () => {
    const mockUser: User = {
        id: 'test-id',
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        picture: 'http://path/to/picture.jpg',
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'State',
            postcode: 12345,
            country: 'ES'
        },
        phone: '123-456-7890',
        cell: '098-765-4321',
        isFavorite: true, 
        gender: 'male',
        nat: 'ES'
    };

    it('displays user information', () => {
        render(<UserCard user={mockUser} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('@johndoe')).toBeInTheDocument();
        expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('opens and displays modal with more details on click', () => {
        render(<UserCard user={mockUser} />);
        fireEvent.click(screen.getByText('John Doe'));
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
        fireEvent.click(screen.getByText('John Doe'));
        fireEvent.click(screen.getByText('Close'));
        expect(screen.queryByText('Email: john@example.com')).toBeNull();
    });
    

});
