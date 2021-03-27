import React from "react"

// for show main menu folders
const NavBar = ({ setActiveMenu, mainMenuData }) => {
  return (
    <section className="nav-wrapper">
      {mainMenuData.map((item, index) => (
        <div
          onClick={() => setActiveMenu(item)}
          key={item.name}
          data-testid={`nav-item-${index + 1}`}
        >
          <img
            src={item.iconUrl}
            className="nav-images"
            alt={item.alt || item.name || ""}
          />
          {item.name}
        </div>
      ))}
    </section>
  )
}

export default NavBar
