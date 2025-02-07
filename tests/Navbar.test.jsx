import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import Navbar from "../src/components/Navbar/Navbar";

describe("Navbar component", () => {
  it("Render Component", () => {
    render(<Navbar />);
    expect(screen.getByTestId("login icon")).toBeInTheDocument();
  });
});
