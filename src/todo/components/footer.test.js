import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./footer";

describe("Footer Component", () => {
  it("renders footer properly", () => {
    const mockDispatch = jest.fn();
    const todos = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
    ];

    render(
      <BrowserRouter>
        <Footer todos={todos} dispatch={mockDispatch} />
      </BrowserRouter>
    );

    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();

    const itemCountElement = screen.getByText("1 item left!");
    expect(itemCountElement).toBeInTheDocument();

    const filterElements = screen.getAllByTestId("footer-navigation");
    expect(filterElements.length).toBe(1);

    const clearCompletedButton = screen.getByText("Clear completed");
    expect(clearCompletedButton).toBeInTheDocument();
  });
});
