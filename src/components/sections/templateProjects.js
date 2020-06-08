import React from "react"
import Particles from "react-particles-js"
import Tilt from "react-parallax-tilt"
import { Link } from "gatsby"

const TemplateProjects = props => {
  return (
    <div className="template__wrappper">
      <div className="template__wrapper__inner">
        <div className="template__wrapper__inner__title">
          <Particles
            className="template__background"
            params={{
              particles: {
                number: {
                  value: 250,
                  density: {
                    enable: true,
                    value_area: 400,
                  },
                },
                color: {
                  value: [
                    "#F83B3A",
                    "#EBDF64",
                    "#62DE6D",
                    "#DB55DD",
                    "#5353F1",
                    "#42E9F4",
                  ],
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false,
                  },
                },
                size: {
                  value: 1.5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600,
                  },
                },
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: false,
                    mode: "grab",
                  },
                  onclick: {
                    enable: false,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3,
                  },
                  repulse: {
                    distance: 400,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
          <h1>{props.ProjectName}</h1>
          <p>{props.ProjectIntro}</p>
          <div className="template__wrapper__inner__title__meta">
            <p>
              Role: <span>{props.ProjectInfo}</span>
            </p>
            <p>
              Context: <span>{props.ProjectMeta}</span>
            </p>
          </div>
        </div>
        <div className="template__wrapper__inner__middle">
          <div className="template__wrapper__inner__middle__container">
            <div className="template__wrapper__inner__middle__container__wrapper">
              <h2>The Project</h2>
              <p>{props.ProjectDescription}</p>
              <div className="template__wrapper__inner__middle__container__wrapper__btn">
                <a href={props.LiveSite} target="_blank">
                  <button>Visit Website</button>
                </a>
              </div>
            </div>
          </div>
          <div className="template__wrapper__inner__middle__img">
            <img src={props.Photo} />
          </div>
          <div className="template__wrapper__inner__middle__container">
            <div className="template__wrapper__inner__middle__container__wrapper">
              <h3>Web Technologies</h3>
              <div className="template__wrapper__inner__middle__container__wrapper__boxes">
                <h4>Front-End</h4>
                <div className="template__wrapper__inner__middle__container__wrapper__boxes__lower">
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.FrontSkills[0]}</p>
                  </Tilt>
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.FrontSkills[1]}</p>
                  </Tilt>
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.FrontSkills[2]}</p>
                  </Tilt>
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.FrontSkills[3]}</p>
                  </Tilt>
                </div>
              </div>
              <div className="template__wrapper__inner__middle__container__wrapper__boxes">
                <h4>Back-End</h4>
                <div className="template__wrapper__inner__middle__container__wrapper__boxes__lower">
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.BackSkills[0]}</p>
                  </Tilt>
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.BackSkills[1]}</p>
                  </Tilt>
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.BackSkills[2]}</p>
                  </Tilt>
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.BackSkills[3]}</p>
                  </Tilt>
                </div>
              </div>
              <div className="template__wrapper__inner__middle__container__wrapper__boxes">
                <h4>Tools</h4>
                <div className="template__wrapper__inner__middle__container__wrapper__boxes__lower">
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.Tools[0]}</p>
                  </Tilt>
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.Tools[1]}</p>
                  </Tilt>
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.Tools[2]}</p>
                  </Tilt>
                  <Tilt
                    className="template__wrapper__inner__middle__container__wrapper__boxes__lower__tilt"
                    tiltReverse={true}
                    reset={false}
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    onEnter={e => {
                      console.log(e)
                    }}
                  >
                    <p>{props.Tools[3]}</p>
                  </Tilt>
                </div>
              </div>
              <div className="template__wrapper__inner__middle__container__wrapper__btn">
                <a href={props.Github} target="_blank">
                  <button>View Source</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateProjects
