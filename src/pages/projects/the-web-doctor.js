import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TemplateProjects from "../../components/sections/templateProjects"

//* Template variables
import TWBphoto from "../../images/twb_mockup.png"
const projectName = "The Web Doctor"
const projectIntro =
  "A fictitious web development agency website built using Gatsby and the Contentful headless CMS."
const projectInfo = "Front End Developer"
const projectMeta = "Website Development"
const projectAim =
  "To use the Contentful CMS and Gatsby to build a website that handled blogs posts and triggers new build once the CMS is updated. "
const projectDescription =
  "I wanted a better understanding of how a headless CMS works and how it integrates with Gatsby.JS. With Gatsby, it was an absolute breeze to set up Contentful and only required a couple of NPM packages to get up and running. I used GraphQL to make calls to the Contentful API and Gatsby to place the data in pre-styled template for presentations to the user. "
const liveSite = "https://goofy-nobel-5d182a.netlify.app/"
const photo = `${TWBphoto}`
const frontSkills = ["HTML5", "SCSS", "JavaScript", "Gatsby.js"]
const isBackend = "Back-End"
const backSkills = ["GraphQL", "Netlify"]
const tools = ["NPM", "Webpack"]
const code = "https://github.com/NickEast12/the_web_doctor"

const TheWebDoctor = () => {
  return (
    <Layout>
      <SEO title="The Web Doctor" />
      <TemplateProjects
        ProjectName={projectName}
        ProjectIntro={projectIntro}
        ProjectInfo={projectInfo}
        ProjectMeta={projectMeta}
        ProjectAim={projectAim}
        ProjectDescription={projectDescription}
        LiveSite={liveSite}
        Photo={photo}
        FrontSkills={frontSkills}
        IsBackend={isBackend}
        BackSkills={backSkills}
        Tools={tools}
        Github={code}
      />
    </Layout>
  )
}

export default TheWebDoctor
