import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Twitter from "../assets/twitter.svg"
import Particles from "react-particles-js"

const IndexPage = () => (
  <Layout>
    <SEO title="Nick East Web Design" />
    <div className="main__wrapper">
      <Particles
        className="main__wrapper__background"
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
      <div className="main__wrapper__content">
        <div className="main__wrapper__content__title">
          <h1>Hi, my name is Nick and I'm a Front End Web Developer</h1>
          <p>I build website and apps using the latest web technologies</p>
        </div>
        <div className="main__wrapper__content__btn">
          <button>My Projects!</button>
          <button>Contact Me!</button>
        </div>
        <div className="main__wrapper__content__meta">
          <p>
            Find me at{" "}
            <span className="main__wrapper__content__meta__github">GitHub</span>{" "}
            and{" "}
            <span className="main__wrapper__content__meta__linkedin">
              Linkedin
            </span>
          </p>
          <p>
            Build with{" "}
            <span className="main__wrapper__content__meta__gatsby">
              Gatsby.js
            </span>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
