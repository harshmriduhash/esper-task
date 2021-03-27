import React from "react"

import NavBar from "./index"
import { mainMenu } from "../../constants"
import { render, fireEvent, screen } from "@testing-library/react"

describe("render navbar in main application", () => {
  test("should render with desktop", () => {
    const tempFun = jest.fn()
    render(<NavBar setActiveMenu={tempFun} mainMenuData={mainMenu} />)
    let button = screen.getByTestId("nav-item-2")
    fireEvent.click(button)
    expect(tempFun).toHaveBeenCalledTimes(1)
    button = screen.getByTestId("nav-item-3")
    fireEvent.click(button)
    expect(tempFun).toHaveBeenCalledTimes(2)
    button = screen.getByTestId("nav-item-1")
    fireEvent.click(button)
    expect(tempFun).toHaveBeenCalledTimes(3)
  })
})
