import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import CreatedFolders from "./createdFolders"
import { activeMenuForTest } from "../../constants"

describe("render folder UI", () => {
  test("render with normal data", () => {
    const clickHandler = jest.fn()
    render(
      <CreatedFolders
        menuItems={activeMenuForTest}
        deleteFolder={clickHandler}
        renameFolderHandler={clickHandler}
      />
    )
    const rightClick = { button: 1 }
    fireEvent.click(screen.getByText("No folder created"), rightClick)
  })
})
