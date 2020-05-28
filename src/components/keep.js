import React from "react"

const keep = () => {
  return (
    <div className="main__wrapper__title__content">
      <div className="main__wrapper__title__content__wrapper">
        <p>and I'm a</p>
        <ul>
          <li>Web Developer</li>
          <li>Web Designer</li>
          <li>Photographer</li>
          <li>Beer Drinker</li>
        </ul>
      </div>
    </div>
  )
}

export default keep

// &__content {
//     line-height: 40px;
//     height: 150px;
//     padding: 0 1rem;
//     &::before {
//       content: "[";
//       position: absolute;
//       font-size: 2rem;
//       left: 0rem;
//       font-family: Lato;
//       color: $mainColour;
//       animation-name: opacity;
//       animation-duration: 2s;
//       animation-iteration-count: infinite;
//       animation-name: opacity;
//       animation-duration: 2s;
//       animation-iteration-count: infinite;
//     }
//     h1 {
//       width: 95%;
//       font-size: 1.6rem;
//       font-weight: 400;
//     }
//     &__wrapper {
//       display: flex;
//       position: relative;
//       overflow: hidden;
//       height: 2.5rem;
//       &::after {
//         content: "]";
//         position: absolute;
//         font-size: 2rem;
//         right: 0.45rem;
//         font-family: Lato;
//         color: $mainColour;
//       }

//       &::before,
//       &::after {
//         animation-name: opacity;
//         animation-duration: 2s;
//         animation-iteration-count: infinite;
//         animation-name: opacity;
//         animation-duration: 2s;
//         animation-iteration-count: infinite;
//       }
//       p {
//         font-size: 1.2rem;
//         padding-right: 6px;
//       }
//       ul {
//         height: 10rem;
//         animation-name: change;
//         animation-duration: 10s;
//         animation-iteration-count: infinite;
//         animation-name: change;
//         animation-duration: 10s;
//         animation-iteration-count: infinite;
//         list-style: none;
//         overflow: hidden;
//         li {
//           font-size: 1.2rem;
//         }
//       }
//     }
//   }

// @keyframes opacity {
//   0%,
//   100% {
//     opacity: 0;
//   }
//   50% {
//     opacity: 1;
//   }
// }

// @keyframes change {
//   0%,
//   12.66%,
//   100% {
//     transform: translate3d(0, 0, 0);
//   }
//   16.66%,
//   29.32% {
//     transform: translate3d(0, -25%, 0);
//   }
//   33.32%,
//   45.98% {
//     transform: translate3d(0, -50%, 0);
//   }
//   49.98%,
//   62.64% {
//     transform: translate3d(0, -75%, 0);
//   }
//   66.64%,
//   79.3% {
//     transform: translate3d(0, -50%, 0);
//   }
//   83.3%,
//   95.96% {
//     transform: translate3d(0, -25%, 0);
//   }
// }
