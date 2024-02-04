import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Item } from "./item";

describe("Item Component", () => {
  it("renders item properly", () => {
    const mockDispatch = jest.fn();
    const todo = { id: 1, title: "Test Todo", completed: false };

    render(<Item todo={todo} dispatch={mockDispatch} index={0} />);

    const todoItemElement = screen.getByTestId("todo-item");
    expect(todoItemElement).toBeInTheDocument();

    const toggleElement = screen.getByTestId("todo-item-toggle");
    const labelElement = screen.getByTestId("todo-item-label");
    const buttonElement = screen.getByTestId("todo-item-button");
    expect(toggleElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("toggles item completion on checkbox click", () => {
    const mockDispatch = jest.fn();
    const todo = { id: 1, title: "Test Todo", completed: false };

    render(<Item todo={todo} dispatch={mockDispatch} index={0} />);

    const toggleElement = screen.getByTestId("todo-item-toggle");
    fireEvent.click(toggleElement);

    expect(mockDispatch).toHaveBeenCalledWith({ type: "TOGGLE_ITEM", payload: { id: 1 } });
  });
});
