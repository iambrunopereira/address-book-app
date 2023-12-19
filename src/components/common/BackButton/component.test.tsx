import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import BackButton from '.';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('BackButton Component', () => {
  it('calls router.back() when clicked', () => {
    // Create a mock for the router.back() function
    const back = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ back });

    render(<BackButton />);

    // Simulate a click on the back button
    fireEvent.click(screen.getByText('Go Back'));
    
    // Expect the back function to have been called
    expect(back).toHaveBeenCalled();
  });
});
