import {render, screen} from '@testing-library/react';
import Greet from '../../src/components/Greet';


describe('Greet', () =>{
    it('Render Hello when name is not provided', ()=>{
        render(<Greet name='Adrian'/>);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Adrian/i);

    });
    it('Render Hello when name is not provided', ()=>{
        render(<Greet/>);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);

    });
})