import React from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [width, setWidth] = React.useState(null)
  const [height, setHeight] = React.useState(null)
  const [isSidebarOpen, setSidebar] = React.useState(false)

  const handleOpenSidebar = () => {
    setSidebar(true)
  }

  const handleCloseSidebar = () => {
    setSidebar(false)
  }

  const handleToggle = () => {
    setSidebar(!isSidebarOpen)
  }

  React.useEffect(() => {
    if (window) {
      setWidth(window.innerWidth)
      setHeight(window.pageYOffset)

      window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
      })

      window.addEventListener("scroll", () => {
        setHeight(window.pageYOffset)
      })

      return () => {
        window.removeEventListener("resize", () => {})
        window.removeEventListener("scroll", () => {})
      }
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        width,
        height,
        handleCloseSidebar,
        handleOpenSidebar,
        handleToggle,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
