import React from "react"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"
import CreatedFolders from "./createdFolders"
import { newFolderSrc } from "../../constants"
import { v4 as uuidv4 } from "uuid"
import { useDrop } from "react-dnd"
import "./react-contextmenu.css"

const MainSection = ({ mainMenuData, setMainMenuItems, activeMenu }) => {
  // for create new folder
  const handleClick = () => {
    const tempData = [...mainMenuData]
    const activeMenuIndex = tempData.findIndex(
      (item) => item.name === activeMenu.name
    )
    const itemLength = tempData[activeMenuIndex].items.length
    const tempY = tempData[activeMenuIndex].items.length < 10 ? 20 : 160
    const tempX = itemLength < 10 ? itemLength * 120 : itemLength * 120 - 1200

    tempData[activeMenuIndex].items.push({
      name: "New Folder " + new Date().getTime(),
      iconUrl: newFolderSrc,
      altText: activeMenu.name + itemLength,
      id: uuidv4(),
      x: tempX + 20,
      y: 20 + tempY,
    })
    setMainMenuItems(tempData)
  }
  // for delete a created folder
  const deleteFolder = (e, data) => {
    e.stopPropagation()
    const tempData = [...mainMenuData]
    const activeMenuIndex = tempData.findIndex(
      (item) => item.name === activeMenu.name
    )
    tempData[activeMenuIndex].items = tempData[activeMenuIndex].items.filter(
      (item) => item.id !== data.id
    )
    setMainMenuItems(tempData)
  }
  // all values of active menu item
  const menuItems = mainMenuData.filter((item) => item.name === activeMenu.name)
  // for rename a folder
  const renameFolderHandler = (item, newName) => {
    const tempData = [...mainMenuData]
    const activeMenuIndex = tempData.findIndex(
      (item) => item.name === activeMenu.name
    )
    const currentFolderIndex = tempData[activeMenuIndex].items.findIndex(
      (folder) => folder.id === item.id
    )
    tempData[activeMenuIndex].items[currentFolderIndex].name = newName
    setMainMenuItems(tempData)
  }

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop: (item, monitor) => {
        const tempData = [...mainMenuData]
        const activeMenuIndex = tempData.findIndex(
          (folder) => folder.name === activeMenu.name
        )
        const currentFolderIndex = tempData[activeMenuIndex].items.findIndex(
          (folder) => folder.id === item.id
        )
        const { x = 20, y = 20 } = monitor.getDifferenceFromInitialOffset()

        tempData[activeMenuIndex].items[currentFolderIndex].x += x
        tempData[activeMenuIndex].items[currentFolderIndex].y += y

        setMainMenuItems(tempData)
      },
    }),
    [activeMenu.name]
  )

  return (
    <section className="main-wrapper" ref={drop}>
      <ContextMenuTrigger id="wrapper-id">
        <div className="main-section">
          <CreatedFolders
            menuItems={menuItems}
            deleteFolder={deleteFolder}
            renameFolderHandler={renameFolderHandler}
          />
        </div>
      </ContextMenuTrigger>
      <ContextMenu className="menu" id="wrapper-id">
        <MenuItem
          onClick={handleClick}
          data={{ item: "Home" }}
          className="menuItem"
        >
          Create
        </MenuItem>
      </ContextMenu>
    </section>
  )
}

export default MainSection
