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
        <h2>My Projects</h2>
        <div className="projects__wrapper__inner__cards">
          <Tilt
            tiltAngleXInitial={0}
            tiltAngleYInitial={0}
            glareEnable={true}
            reset={false}
            perspective={500}
            className="projects__wrapper__inner__cards__tilt "
          >
            <Link to="/">
              <Cards className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--left">
                  The Web Doctor
                </h1>
              </Cards>
            </Link>
          </Tilt>
          <Tilt
            glareEnable={true}
            reset={false}
            perspective={500}
            className="projects__wrapper__inner__cards__tilt "
          >
            <Link to="/">
              <Cards className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--right">
                  The Web Doctor
                </h1>
              </Cards>
            </Link>
          </Tilt>
          <Tilt
            glareEnable={true}
            reset={false}
            perspective={500}
            className="projects__wrapper__inner__cards__tilt "
          >
            <Link to="/">
              <Cards className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--left">
                  The Web Doctor
                </h1>
              </Cards>
            </Link>
          </Tilt>
          <Tilt
            glareEnable={true}
            reset={false}
            perspective={500}
            className="projects__wrapper__inner__cards__tilt "
          >
            <Link to="/">
              <Cards className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--right">
                  The Web Doctor
                </h1>
              </Cards>
            </Link>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default projects
