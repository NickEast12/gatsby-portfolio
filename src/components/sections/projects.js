import React from "react"
import Tilt from "react-parallax-tilt"
import { Link } from "gatsby"
import styled from "styled-components"

import TWD from "../../images/the_web_doctor.png"

const Cards = styled.div`
  background-image: url(${TWD});
  background-size: cover;
  background-position: center;
`

const projects = () => {
  return (
    <div className="projects__wrapper" id="projectTag">
      <div className="projects__wrapper__inner">
        <h2>
          <span className="dec__left">M</span>y Project
          <span className="dec__right">s</span>
        </h2>
        <div className="projects__wrapper__inner__cards">
          <div className="projects__wrapper__inner__cards__tilt ">
            <Link to="/projects/the-web-doctor">
              <Cards className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--left">
                  The Web Doctor
                </h1>
              </Cards>
            </Link>
          </div>
          <div className="projects__wrapper__inner__cards__tilt ">
            <Link to="/projects/the-web-doctor">
              <Cards className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--right">
                  Developer Portfolio
                </h1>
              </Cards>
            </Link>
          </div>
          <div className="projects__wrapper__inner__cards__tilt ">
            <Link to="/">
              <Cards className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--left">
                  Vine Street Solutions
                </h1>
              </Cards>
            </Link>
          </div>
          <div className="projects__wrapper__inner__cards__tilt ">
            <div to="/">
              <Cards className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--right">
                  LashBase
                </h1>
              </Cards>
            </div>
          </div>
          <div className="projects__wrapper__inner__cards__tilt ">
            <Link to="/">
              <Cards className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--left">
                  Obliterate
                </h1>
              </Cards>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects
