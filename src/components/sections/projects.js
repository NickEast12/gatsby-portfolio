import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//* Lazy loaded images using gatsby-image

import ProjectCards from "../../components/sections/projectCards"

const projects = () => {
  return (
    <div className="projects__wrapper" id="projectTag">
      <div className="projects__wrapper__inner">
        <h2>
          <span className="dec__left">M</span>y Project
          <span className="dec__right">s</span>
        </h2>
        <div className="projects__wrapper__inner__cards">
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <ProjectCards
              projectName="Zano Controls"
              link="zano-controls"
              imgName="zano.png"
            ></ProjectCards>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects
