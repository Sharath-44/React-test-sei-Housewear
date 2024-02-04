import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import { Header } from "./header";

describe("Header Component", () => {
  it("renders header properly", () => {
    const mockDispatch = jest.fn();
    
    render(<Header dispatch={mockDispatch} />);

    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });
});
