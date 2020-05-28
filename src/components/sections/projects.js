import React from "react"
import Tilt from "react-parallax-tilt"
import { Link } from "gatsby"

const projects = () => {
  return (
    <div className="projects__wrapper" id="projectTag">
      <div className="projects__wrapper__inner">
        <h2>My Projects</h2>
        <div className="projects__wrapper__inner__cards">
          <Tilt glareEnable={true}>
            <div
              style={{
                height: "300px",
                width: "100%",
                backgroundColor: "darkgreen",
              }}
            >
              <h1>React Parallax Tilt 👀</h1>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default projects
