import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useState } from "react"
import styled from "styled-components"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledBurger = styled.div`
  width: 100%;
  height: 2rem;
  margin-left: 0.48rem;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  position: relative;
  div {
    width: 1.85em;
    height: 3px;
    background-color: #ffffff;
    transform-origin: 3px;
    transition: all 0.35s ease;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      background: ${({ open }) => (open ? "#000" : "#fff")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
      background: ${({ open }) => (open ? "#000" : "#fff")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      background: ${({ open }) => (open ? "#000" : "#fff")};
    }
  }
`
const MenuTitle = styled.div`
  h1 {
    color: ${({ open }) => (open ? "#000" : "#fff")};
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`
const Menu = styled.div`
display: ${({ open }) => (open ? "block" : "none")};
  transition: all 0.9s ease;
  @keyframes animationFrames {
    0% {
      opacity: 0;
      width: 0;
      height: 0;
      background: none;
    }
    100% {
      opacity: 1;
      width: 100%
      height: 100%;
      background: #ffffff;
    }
  }
  @keyframes animationFramesOut {
    
    0% {
      opacity: 1;
      width: 100%
      height: 100%;
      background: #ffffff;
    }
    25% {
      opacity: 1;
      width: 100%
      height: 100%;
      background: #ffffff;
    }
    50% {
      opacity: 1;
      width: 100%
      height: 100%;
      background: #ffffff;
    }
    75% {
      opacity: 1;
      width: 100%
      height: 100%;
      background: #ffffff;
    }
    100% {
      opacity: 0;
      width: 0;
      height: 0;
      background: none;
    }
  }
 
  @keyframes MenuItemsIn {
    
    0% {
      opacity: 0;
      transform: translateY(20px);
     }
     25% {
       opacity: 0;
     }
     50% {
       opacity: 0;
     }
     75% {
       opacity: 0;
     }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes MenuItemsOut {
    
    0% {
      opacity: 0;
      transform: translateY(0);
     }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }
 
 
  div {
    animation: ${({ open }) =>
      open ? "animationFrames" : "animationFramesOut"} 0.5s linear 0s
    alternate 1 forwards running;
    ul {
      li {
        div {
          opacity: 0;
          animation: ${({ open }) =>
            open ? "MenuItemsIn" : "MenuItemsOut"} .75s linear 0s
    alternate 1 forwards running;
        }
      }
    }
  }
  
`
const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <header className="main__header__wrapper">
      <div className="main__header__wrapper__ham">
        <StyledBurger
          open={open}
          onClick={() => setOpen(!open)}
          className="main__header__wrapper__ham__container"
        >
          <div></div>
          <div></div>
          <div></div>
        </StyledBurger>
        <MenuTitle open={open} className="menu">
          <h1>MENU</h1>
        </MenuTitle>
      </div>
      <Menu open={open} className="main__header__wrapper__menu">
        <div className="main__header__wrapper__menu__inner">
          <ul>
            <div className="traffic__lights">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <li>
              <div
                className="menu__items"
                open={open}
                onClick={() => {
                  scrollTo("#nameTag")
                  setOpen(!open)
                }}
              >
                <h2>About Me</h2>
                <p>lorem lorem lorem112 lorem lorem lormem</p>
              </div>
            </li>
            <li>
              <div
                className="menu__items"
                onClick={() => {
                  scrollTo("#projectTag")
                  setOpen(!open)
                }}
              >
                <h2>Projects</h2>
                <p>lorem lorem lorem112 lorem lorem lormem</p>
              </div>
            </li>
            <li>
              <div className="menu__items">
                <h2>Refrences</h2>
                <p>lorem lorem lorem112 lorem lorem lormem</p>
              </div>
            </li>
            <li>
              <div className="menu__items">
                <h2>Contact</h2>
                <p>lorem lorem lorem112 lorem lorem lormem</p>
              </div>
            </li>
          </ul>
        </div>
      </Menu>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
