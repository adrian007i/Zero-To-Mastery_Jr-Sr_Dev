import { render, screen } from '@testing-library/react';
import PlaygroundPage from '../../src/pages/PlaygroundPage';

describe("TermsAndCondictions", () => {
    it('should render with uncheck boxed and disabled button', () => {
        render(<PlaygroundPage />)

        const submitBtn = screen.getByRole("button");
        expect(submitBtn).toBeDisabled();

        const checkbox = screen.getByRole("checkbox")
        expect(checkbox).not.toBeChecked() 
    })

    it('should enable button when box is checked', () => {
        render(<PlaygroundPage />)

        const submitBtn = screen.getByRole("button");
        const checkbox = screen.getByRole("checkbox");

        checkbox.click()
        expect(checkbox).toBeChecked(); 
        expect(submitBtn).not.toBeDisabled();

        checkbox.click()
        expect(checkbox).not.toBeChecked(); 
        expect(submitBtn).toBeDisabled();

    })
})