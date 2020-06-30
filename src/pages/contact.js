import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from "react-particles-js"

const ContactPage = () => (
  <Layout>
    <SEO title="Skills & Experience" />
    <div className="main__wrapper">
      <Particles
        className="contact__wrapper__background"
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
      <div className="contact__wrapper">
        <div className="contact__wrapper__inner">
          <h2>
            <span className="dec__left">C</span>ontact M
            <span className="dec__right">e</span>
          </h2>
          <p>
            Currently looking for a Junior Front End Developer position but also
            interested in freelance opportunities. If you do have any questions
            just contact me using the form below.
          </p>
          <form
            className="contact__wrapper__inner__form"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact__wrapper__inner__form__section">
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                required
              ></input>
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                required
              ></input>
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="title"
              id="title"
              required
            ></input>
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              required
            ></textarea>
            <div className="contact__wrapper__inner__form__btn">
              <button type="submit">
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
