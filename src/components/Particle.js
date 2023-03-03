import React from "react"
//import ParticlesBg from "particles-bg"
import { AppContext } from "../context"
import loadable from "@loadable/component"

// pPosto particles-bg koristi window objekat, nec projekat da se builduje (ssr)
//zato koristimo  loadable
//source https://www.gatsbyjs.com/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
//Another solution is to use a package like loadable-components. The module that ////tries to use window will be dynamically loaded only on the client side (and not //during SSR).

const ParticlesBg = loadable(() => import("particles-bg"))
//https://github.com/lindelof/particles-bg

let config = {
  num: [4, 7],
  rps: -0.1,
  radius: [0.4, 1.8],
  life: [1.5, 8],
  v: [-2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  rotate: [0, 20],
  alpha: [0.9, 0],
  scale: [1, 0.1],
  position: { x: 20, y: 5, width: 1000, height: 100 }, // all or center or {x:1,y:1,width:100,height:100}
  color: ["#ececec", "#ff0000"],
  cross: "dead", // cross or bround
  random: 15, // or null,
  g: 1, // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath()
    ctx.arc(particle.p.x, particle.p.y, particle.radius * 2, 0, 2 * Math.PI)

    ctx.fillStyle = particle.color

    ctx.fill()
    ctx.closePath()
  },
}

const Particle = () => {
  const { width } = React.useContext(AppContext)
  return (
    //<ParticlesBg type="custom" config={config} bg={false} />

    //<ParticlesBg color="#f7f7f7" type="cobweb" bg={false} />

    <div
      style={{
        position: "absolute",
        zIndex: "1",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
      }}
    >
      {width > 1100 ? (
        <ParticlesBg color="#f7f7f7" type="cobweb" bg={false} />
      ) : (
        <ParticlesBg type="custom" config={config} bg={false} />
      )}
    </div>
  )
}

export default Particle
