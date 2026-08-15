import Header from "../components/Header"
import { render, screen } from "@testing-library/react";
import  "@testing-library/dom";

describe("Header Component test cases", () => {
    
    test("Should have login text", () => {
        render(<Header />);

        // const login = screen.getByAltText("logo");

        // expect(login).toBeInTheDocument();
    })
})