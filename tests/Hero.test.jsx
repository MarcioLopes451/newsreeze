import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import Hero from "../src/pages/Hero/Hero";

describe("Hero page & Search Bar component", () => {
  it("search bar component & searching for specific data", async () => {
    render(<Hero />);
    const searchBar = screen.getByPlaceholderText("search for anything...");
    expect(searchBar).toBeInTheDocument();

    fireEvent.change(searchBar, { target: { value: "super bowl" } });
    fireEvent.keyDown(searchBar, { key: "Enter", code: "Enter" });

    const specificData = await waitFor(
      () =>
        screen.getByText(
          "2025 NFL Mock Draft: B/R NFL Scouting Dept.'s Post-Super Bowl Picks"
        ),
      { timeout: 4000 }
    );
    expect(specificData).toBeInTheDocument();
    screen.debug();
  });
  it("data rendering on Page", async () => {
    render(<Hero />);
    await waitFor(() =>
      expect(
        screen.getByText(
          "Super Bowl commercials 2025: Grading the best, worst, wildest and weirdest Big Game Ads - Yahoo Sports"
        )
      ).toBeInTheDocument()
    );
    screen.debug();
  });
});
