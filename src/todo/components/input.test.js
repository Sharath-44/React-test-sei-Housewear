import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./input";

describe("Input Component", () => {
  it("triggers onSubmit callback on pressing Enter with a valid value", () => {
    const mockOnSubmit = jest.fn();
    render(<Input onSubmit={mockOnSubmit} placeholder="Test Placeholder" label="Test Label" />);

    const inputElement = screen.getByTestId("text-input");

    fireEvent.change(inputElement, { target: { value: "Test Value" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(mockOnSubmit).toHaveBeenCalledWith("Test Value");

    expect(inputElement.value).toBe("");
  });

  it("does not trigger onSubmit callback on pressing Enter with an invalid value", () => {
    const mockOnSubmit = jest.fn();
    render(<Input onSubmit={mockOnSubmit} placeholder="Test Placeholder" label="Test Label" />);

    const inputElement = screen.getByTestId("text-input");

    fireEvent.change(inputElement, { target: { value: "a" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(mockOnSubmit).not.toHaveBeenCalled();
    expect(inputElement.value).toBe("a");
  });
});
