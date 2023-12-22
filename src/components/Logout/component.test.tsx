import { render } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import LogoutHandler from './component';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));
  
test('renders without error', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock }); 
  render(<LogoutHandler />);
});

test('returns null', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock }); 
  const { container } = render(<LogoutHandler />);
  expect(container.firstChild).toBeNull();
});