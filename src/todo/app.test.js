import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

describe("App Component", () => {
  it("renders app properly", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();

    const mainElement = screen.getByTestId("main");
    expect(mainElement).toBeInTheDocument();

  });
});
