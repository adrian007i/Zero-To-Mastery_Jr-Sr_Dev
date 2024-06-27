import { render, screen, fireEvent } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText"
import { log } from "console";
import exp from "constants";


describe("ExpandableText", () => {

    it("Should hide button and not colapse when text is under 255", () => {
        const shortText = "Hello World";
        
        render(<ExpandableText text = {shortText} /> ); 
         
        expect(screen.getByText(shortText)).toBeInTheDocument()
        expect(screen.queryByText("Show Less")).toBeNull();
        expect(screen.queryByText("Show More")).toBeNull()
        
    });

    it("Should show button and colapse text when over 255 chars", ()=>{
        const longText = "a".repeat(1000); 

        render(<ExpandableText text = {longText}/>)

        const expandBtn = screen.getByRole("button");
        const renderText = screen.getByRole("article")
        
        expect(expandBtn).toBeInTheDocument();
        expect(expandBtn).toHaveTextContent(/more/i);
        expect(renderText).toHaveTextContent(longText.substring(0, 255)+"...")


        fireEvent.click(expandBtn);
        expect(expandBtn).toHaveTextContent(/less/i);  
        expect(renderText).toHaveTextContent(longText);
    })
})