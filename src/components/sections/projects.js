import React from "react"
import Tilt from "react-parallax-tilt"
import { Link } from "gatsby"
import styled from "styled-components"

import TWD from "../../images/the_web_doctor.png"
import DEV from "../../images/developer.png"
import VS from "../../images/vs.png"
import LASH from "../../images/lashbase.png"
import OBL from "../../images/obl.png"

const Cards = styled.div`
  background-image: url(${TWD});
  background-size: cover;
  background-position: center;
`
const DevCard = styled.div`
  background-image: url(${DEV});
  background-size: cover;
  background-position: center;
`
const VSCard = styled.div`
  background-image: url(${VS});
  background-size: cover;
  background-position: top;
`
const LashCard = styled.div`
  background-image: url(${LASH});
  background-size: cover;
  background-position: top;
`
const OCard = styled.div`
  background-image: url(${OBL});
  background-size: cover;
  background-position: top;
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
                <div className="projects__wrapper__inner__cards__tilt__inner__overlay">
                  <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content">
                    <h3>The Web Doctor</h3>
                    <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content__btn">
                      <button>View Project</button>
                    </div>
                  </div>
                </div>
              </Cards>
            </Link>
          </div>
          <div className="projects__wrapper__inner__cards__tilt ">
            <Link to="/projects/developer-portfolio">
              <DevCard className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--right">
                  Developer Portfolio
                </h1>
                <div className="projects__wrapper__inner__cards__tilt__inner__overlay">
                  <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content">
                    <h3>Developer Portfolio</h3>
                    <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content__btn">
                      <button>View Project</button>
                    </div>
                  </div>
                </div>
              </DevCard>
            </Link>
          </div>
          <div className="projects__wrapper__inner__cards__tilt ">
            <Link to="/projects/vine-street">
              <VSCard className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--left">
                  Vine Street Solutions
                </h1>
                <div className="projects__wrapper__inner__cards__tilt__inner__overlay">
                  <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content">
                    <h3>Vine Street Solutions</h3>
                    <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content__btn">
                      <button>View Project</button>
                    </div>
                  </div>
                </div>
              </VSCard>
            </Link>
          </div>
          <div className="projects__wrapper__inner__cards__tilt ">
            <div to="/projects/lashbase">
              <LashCard className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--right">
                  LashBase
                </h1>
                <div className="projects__wrapper__inner__cards__tilt__inner__overlay">
                  <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content">
                    <h3>LashBase</h3>
                    <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content__btn">
                      <button>View Project</button>
                    </div>
                  </div>
                </div>
              </LashCard>
            </div>
          </div>
          <div className="projects__wrapper__inner__cards__tilt ">
            <Link to="/projects/obliterate">
              <OCard className="projects__wrapper__inner__cards__tilt__inner">
                <h1 className="projects__wrapper__inner__cards__tilt__inner--left">
                  Obliterate
                </h1>
                <div className="projects__wrapper__inner__cards__tilt__inner__overlay">
                  <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content">
                    <h3>Obliterate</h3>
                    <div className="projects__wrapper__inner__cards__tilt__inner__overlay__content__btn">
                      <button>View Project</button>
                    </div>
                  </div>
                </div>
              </OCard>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects
