import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

describe("Contact us component test cases", () => {
    test("Should be render Contact Component", () => {
    
        render(<Contact />)
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test("Should be redner Submit Button in Contact Component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    test("Should be 2 input boxed", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2)
    })
})
