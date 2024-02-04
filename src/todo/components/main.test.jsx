import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./main";

describe("Main Component", () => {
  it("renders main properly", () => {
    const mockDispatch = jest.fn();
    const todos = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
    ];

    render(
      <BrowserRouter>
        <Main todos={todos} dispatch={mockDispatch} />
      </BrowserRouter>
    );

    const mainElement = screen.getByTestId("main");
    expect(mainElement).toBeInTheDocument();

    const toggleAllCheckbox = screen.getByTestId("toggle-all");
    expect(toggleAllCheckbox).toBeInTheDocument();

    const toggleAllLabel = screen.getByText("Toggle All Input");
    expect(toggleAllLabel).toBeInTheDocument();

    const todoListElement = screen.getByTestId("todo-list");
    expect(todoListElement).toBeInTheDocument();

    const todoItems = screen.getAllByTestId("todo-item");
    expect(todoItems.length).toBe(todos.length);

  });
});
