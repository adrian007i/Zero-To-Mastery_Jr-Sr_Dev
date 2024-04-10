import {screen, render} from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';


describe('Product Image Gallery' , ()=>{

    it("should render null when no images are provided" ,()=>{

        const {container} = render(<ProductImageGallery imageUrls = {[]} />);
        expect(container).toBeEmptyDOMElement();
    });

    it("should display images with appropriate src attribute", ()=>{
        const mockImages = [
            "cuteBunny.png",
            "cuteDog.jpg"
        ]
        
        
        render(<ProductImageGallery imageUrls = {mockImages} />);

        const imgs =screen.getAllByRole('img');
        expect(imgs).toHaveLength(2);
        
        imgs.forEach((img, idx) => {
            expect(imgs[idx]).toHaveAttribute("src", mockImages[idx])

        });


    })
})