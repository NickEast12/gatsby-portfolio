import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

import ProjectImage from "../../components/image"

const ProjectCards = props => {
  return (
    <div className="projects__wrapper__inner__cards__tilt ">
      <ProjectImage img={props.imgName}></ProjectImage>
      <Link to={`/projects/${props.link}`}>
        <div className="projects__wrapper__inner__cards__tilt__inner">
          <h1 className="projects__wrapper__inner__cards__tilt__inner--left">
            {props.projectName}
          </h1>
          <div className="projects__wrapper__inner__cards__tilt__inner__overlay">
            <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content">
              <h3>{props.projectName}</h3>
              <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content__btn">
                <button>View Project</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCards
