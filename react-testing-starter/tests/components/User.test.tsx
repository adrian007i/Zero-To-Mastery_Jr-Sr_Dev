import {screen, render} from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount'; 
describe("User Profile", () =>{

    it("Should contain the User's Name" , ()=>{

        const newUser= {
            id: 1,
            name: "John Doe",
            isAdmin: false  
          };

        render(<UserAccount user = {newUser} />); 
        expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    it("Should show edit button when user is admin" , ()=>{

        const newUser= {
            id: 1,
            name: "John Doe",
            isAdmin: true  
          };

        render(<UserAccount user = {newUser} />); 
        expect(screen.getByRole("button")).toBeInTheDocument();
        
    });

    it("Should hide edit button when user is not admin" , ()=>{

        const newUser= {
            id: 1,
            name: "John Doe",
            isAdmin: false  
          };

        render(<UserAccount user = {newUser} />); 

        const btn = screen.queryByRole("button");
        expect(btn).not.toBeInTheDocument();
    });
});

 