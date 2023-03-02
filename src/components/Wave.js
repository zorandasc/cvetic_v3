import React from "react"

const Wave = () => {
  return (
    <div
      style={{
        position: "absolute",
        right: "0",
        left: "0",
        bottom: "-10px",
        width: "100%",
        zIndex: "2",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1366 229.5"
        fill="#fff"
      >
        <path
          d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z"
          opacity=".53"
        ></path>
        <path d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z"></path>
      </svg>
    </div>
  )
}

export default Wave