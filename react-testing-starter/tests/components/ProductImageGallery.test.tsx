import { screen, render } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe("Product Image Gallery", () => {
    it("Should render empty DOM when imagesUrls is empty", () => {

        const {container} = render(<ProductImageGallery imageUrls={[]} />);
        expect(container).toBeEmptyDOMElement()
    });

    it("Should render images with appropriate src attribute", ()=> {
        const mockImageUrls = [
            'cute_pups.jpg',
            'cute_cats.jpg'
        ]

        render(<ProductImageGallery imageUrls={mockImageUrls} />);
        
        const imgs = screen.getAllByRole("img");
        expect(imgs.length).toBe(2)
        
        imgs.forEach((img, idx) =>{ 
            expect(img).toHaveAttribute("src", mockImageUrls[idx])
        })
    })
})