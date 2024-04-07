import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import CounterButton from './CounterButton';

const mockColor = "red";

it('has correct welcome text', () => {

    const { container } = render(<CounterButton color={mockColor} />);
    expect(container).toBeInTheDocument();
});


;

it('checks when the button is clicked', async () => {
    const { getByRole } = render(<CounterButton  color={mockColor} />);
    const button = getByRole('button');

    fireEvent.click(button); 
    expect(button).toHaveTextContent('Count: 2');

    fireEvent.click(button); 
    fireEvent.click(button);  
    expect(button).toHaveTextContent('4');
});