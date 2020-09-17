import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from "react-particles-js"

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills & Experience" />
    <div className="main__wrapper">
      <Particles
        className="skills__wrapper__background"
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: false,
                value_area: 10,
              },
            },
            color: {
              value: ["#FFFFFF"],
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
      <div className="skills__wrapper">
        <div className="skills__wrapper__inner">
          <div className="skills__wrapper__inner__right">
            <h2>
              <span className="dec__left">S</span>kills{" "}
              <span className="skills__wrapper__inner__span">&amp;</span>{" "}
              Experienc<span className="dec__right">e</span>
            </h2>
            <p>
              My main area of focus is on front end development, using HTML, CSS
              and JavaScript to create custom websites. I also build small and
              medium web applications using React.JS and Gatsby.
            </p>
            <p>
              Although I spend most of my time coding on the front end of the
              web, I have experience using Node.JS and Express and several
              headless CMS.
            </p>
            <p>
              I'm currently getting myself stuck into Next.JS and GraphQL to
              assist me in building a custom-built online store.
            </p>
            <p>
              Visit my <span>Github</span> for all links to my personal
              projects.
            </p>
          </div>
          <div className="skills__wrapper__inner__left">
            <h3>
              <span className="dec__left">W</span>eb Technologie
              <span className="dec__right">s</span>
            </h3>
            <ul>
              <li>
                <p>HTML5</p>
              </li>
              <li>
                <p>CSS3</p>
              </li>
              <li>
                <p>JavaScript</p>
              </li>
              <li>
                <p>SASS</p>
              </li>
              <li>
                <p>PUG</p>
              </li>
              <li>
                <p>JQuery</p>
              </li>
              <li>
                <p>React.JS</p>
              </li>
              <li>
                <p>Gatsby.JS</p>
              </li>
              <li>
                <p>Node.JS</p>
              </li>
              <li>
                <p>Express.JS</p>
              </li>
              <li>
                <p>MongoDB</p>
              </li>
              <li>
                <p>WordPress</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SkillsPage
