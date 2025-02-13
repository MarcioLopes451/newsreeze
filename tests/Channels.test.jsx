import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import Hero from "../src/pages/Hero/Hero";
import Channels from "../src/pages/Channels/Channels";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("Hero and Channels pages", () => {
  it("user clicks channel to take them to channel page", async () => {
    render(
      <MemoryRouter initialEntries={["/newsreeze/"]}>
        <Routes>
          <Route path="/newsreeze/" element={<Hero />} />
          <Route path="/newsreeze/channels/:name" element={<Channels />} />
        </Routes>
      </MemoryRouter>
    );
    // get button for specific channel
    const cryptoButton = screen.getByText("Crypto");
    expect(cryptoButton).toBeInTheDocument();

    // click button to send us to channel page
    fireEvent.click(cryptoButton);

    // check to see if user is in channel page
    const cryptoChannel = await waitFor(() =>
      screen.getByText("crypto channel")
    );
    expect(cryptoChannel).toBeInTheDocument();

    // check if data is being rendered on the page
    const cryptoData = await waitFor(() => screen.getAllByText("Joel Khalili"));
    expect(cryptoData[0]).toBeInTheDocument();

    // find go back button
    const goBack = await waitFor(() => screen.getByText("Go Back"));
    expect(goBack).toBeInTheDocument();

    // click button to send user back to home page
    fireEvent.click(goBack);

    // check if user is back at homepage
    const homePage = await waitFor(() => screen.getByText("Explore Channels"));
    expect(homePage).toBeInTheDocument();
    screen.debug();
  });
});
