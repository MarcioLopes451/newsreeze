import "@testing-library/jest-dom/vitest";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "../../src/components/Navbar/Navbar";

describe("Sidebar Navbar", () => {
  it("Side navbar opens on click", async () => {
    render(<Navbar />);
    const loginbtn = screen.getByTestId("login icon");
    expect(loginbtn).toBeInTheDocument();

    fireEvent.click(loginbtn);

    const sidenav = screen.getByText("Alberto Pain");
    expect(sidenav).toBeInTheDocument();

    const location = await waitFor(() => screen.getByText("Dagenham, London"));
    expect(location).toBeInTheDocument();
    screen.debug();
  });
});
