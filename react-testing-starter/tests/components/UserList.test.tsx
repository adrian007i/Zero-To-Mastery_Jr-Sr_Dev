import {screen, render} from '@testing-library/react';
import UserList from '../../src/components/UserList';


describe('User List' , () => {

    it("should display no users when the array is empty" , ()=>{

        render(<UserList users= {[]} />);

        const errorParagraph = screen.getByText(/no users/i);
        expect(errorParagraph).toBeInTheDocument();

    });

    it("should display render links once users is not empty" , ()=>{

        const mockUsers = [
            {id: 1 , name: "Adrian"},
            {id: 2 , name: "John"},
        ]

        render(<UserList users= {mockUsers} />);

        mockUsers.forEach(user => {
            const user_link =screen.getByRole('link', {name : user.name});
            expect(user_link).toBeInTheDocument();
            expect(user_link).toHaveAttribute("href", `/users/${user.id}`)

        });
    });

});