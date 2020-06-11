import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

//* import Gifs
import Fail1 from "../images/gifs/fail1.gif"
import Fail2 from "../images/gifs/fail2.gif"
import Fail3 from "../images/gifs/fail3.gif"
import Fail4 from "../images/gifs/fail4.gif"
import Fail5 from "../images/gifs/fail5.gif"
import Fail6 from "../images/gifs/fail6.gif"
const list = [Fail1, Fail2, Fail3, Fail4, Fail5, Fail6]

//* Random numbeer generator
const number = Math.floor(Math.random() * 6)
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="failed__wrapper">
      <div className="failed__wrapper__inner">
        <div className="failed__wrapper__inner__content">
          <div className="failed__wrapper__inner__content__container">
            <h1>404</h1>
            <h2>Page not found</h2>
            <div className="failed__wrapper__inner__content__container__btn">
              <Link to="/">
                <button>Back to safety</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="failed__wrapper__inner__img">
          <img src={list[number]} />
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
