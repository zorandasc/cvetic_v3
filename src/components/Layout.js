import React from "react"

import { AppContext } from "../context"
import Footer from "./Footer"
import NavBarDesk from "./NavBarDesk"
import NavBarMob from "./NavBarMob"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const {
    width,
    handleCloseSidebar,
    handleOpenSidebar,
    isSidebarOpen,
  } = React.useContext(AppContext)
  const TRANSITION_LENGTH = 0.4
  return (
    <>
      {width > 1100 ? (
        <NavBarDesk></NavBarDesk>
      ) : (
        <NavBarMob openDrawer={handleOpenSidebar}></NavBarMob>
      )}

      <Sidebar
        visible={isSidebarOpen}
        closeDrawer={handleCloseSidebar}
        transitionLength={TRANSITION_LENGTH}
      ></Sidebar>
      <div
        style={{
          height: "100vh",
          //overflow: isSidebarOpen ? "hidden" : "visible",
          transform: isSidebarOpen ? "scale(0.9)" : "none",
          transition: `transform ${TRANSITION_LENGTH}s ease-out`,
        }}
      >
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout
