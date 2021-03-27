import React, { useState } from "react"
import NavBar from "./components/navbar"
import "./style.css"
import { mainMenu } from "./constants"
import MainSection from "./components/main"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

function App() {
  /**
   * for track user folder location
   */
  const [activeMenu, setActiveMenu] = useState(mainMenu[0])
  /**
   * for store user folders data
   */
  const [mainMenuData, setMainMenuItems] = useState([...mainMenu])

  return (
    <div className="App">
      <h2 data-testid="active-menu-id">{activeMenu.name}</h2>
      <div className="wrapper">
        <NavBar setActiveMenu={setActiveMenu} mainMenuData={mainMenuData} />
        <DndProvider backend={HTML5Backend}>
          <MainSection
            mainMenuData={mainMenuData}
            setMainMenuItems={setMainMenuItems}
            activeMenu={activeMenu}
          />
        </DndProvider>
      </div>
    </div>
  )
}

export default App
