import React from "react"

import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders main application", () => {
  render(<App />)
  const linkElement = screen.getByTestId("active-menu-id")
  expect(screen.getByTestId("active-menu-id")).toBe(linkElement)
})
