import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event' 
import '@testing-library/jest-dom'
import Header from './Header';

it('renders Card component', async () => {
    render(<Header url="/" />)
    await screen.findByRole('heading')

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('RoboFriends');
    expect(screen.getByRole('heading')).toMatchSnapshot();
});