import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TemplateProjects from "../../components/sections/templateProjects"

//* Template variables
import TWBphoto from "../../images/vs_mockup.png"
const projectName = "Vine Street"
const projectIntro =
  "Vine street are an independent managed print solutions provider bases in Mayfair, London."
const projectInfo = "Front End Developer"
const projectMeta = "Website Redesign"
const projectAim =
  "To rebrand Vine Streets online presence to help boost sales and brand recognition."
const projectDescription =
  "Vine Street website and online presence were in desperate need for a complete redesign. They now have a modern responsive website that works on all devices and is complete with helpdesk contact forms and uses the latest SEO techniques."
const liveSite = "https://www.vinestreet.solutions"
const photo = `${TWBphoto}`
const frontSkills = ["HTML5", "SCSS", "JavaScript", "JQuery"]
const isBackend = "Back-End"
const backSkills = ["Express.JS", "Node.JS"]
const tools = ["Gulp", "EJS", "NPM", "SEO"]
const code = "https://www.vinestreet.solutions"
const id = " 1"
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
        key={id}
      />
    </Layout>
  )
}

export default TheWebDoctor
