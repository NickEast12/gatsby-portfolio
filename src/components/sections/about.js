import React from "react"

const About = () => {
  return (
    <div className="about__wrapper" id="nameTag">
      <div className="about__wrapper__inner">
        <div className="about__wrapper__inner__left">
          <h2>
            <span className="dec__left">A</span>bout M
            <span className="dec__right">e</span>
          </h2>
          <p className="about__wrapper__inner__left--bold">
            Currently trained as front end developer, I spend most of my time
            hacking away using a React.JS, Gatsby and anything JavaScript, CSS
            and HTML related. I also like to tinker with Node.JS and the Express
            framework to build custom backends for my projects.
          </p>
          <p>
            I'm a well-organised, ambitious problem solver with high attention
            to detail. I love football, MMA, most types of music and anything
            web or technology related.
          </p>
          <p>
            Interested in working with a team of like-minded developers to help
            develop my skills and reach my full potential.
          </p>
        </div>
        <div className="about__wrapper__inner__right"></div>
      </div>
    </div>
  )
}

export default About
