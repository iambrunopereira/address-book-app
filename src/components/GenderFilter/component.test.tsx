import { fireEvent, render, screen } from '@testing-library/react';
import GenderFilter from '.';

describe('<GenderFilter />', () => {
    it('should call onChange with the correct value when an option is selected', () => {
      const handleChange = jest.fn();
      render(<GenderFilter onChange={handleChange} />);
  
      const maleRadio = screen.getByLabelText('Male');
      fireEvent.click(maleRadio);
      
      expect(handleChange).toHaveBeenCalledWith('male');
    });
  
    it('should default to "all" if no defaultValue is provided', () => {
      render(<GenderFilter onChange={() => {}} />);
  
      const allRadio = screen.getByLabelText('All');
      expect(allRadio).toBeChecked();
    });
  
    it('should respect the defaultValue prop', () => {
      render(<GenderFilter defaultValue="female" onChange={() => {}} />);
  
      const femaleRadio = screen.getByLabelText('Female');
      expect(femaleRadio).toBeChecked();
    });
  });