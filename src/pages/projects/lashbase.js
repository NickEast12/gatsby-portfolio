import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TemplateProjects from "../../components/sections/templateProjects"

//* Template variables
import TWBphoto from "../../images/lb_mockup.png"
const projectName = "LashBase"
const projectIntro =
  "LashBase is the online application that allows users to find, book and review eyelash technicians in their area."
const projectInfo = "Full Stack Developer"
const projectMeta = "App Development"
const projectAim =
  "To build a full-stack application with a MongoDB database tapped into a Node.JS backend.  "
const projectDescription =
  "LashBase allowed users to sign up and browse for local eyelash technicians in their area. They can make a booking and then review the service out of 5 stars after. Sellers can edit their online profile and post photos and treatments that are available. "
const liveSite = "https://lashbase.herokuapp.com/"
const photo = `${TWBphoto}`
const frontSkills = ["PUG", "SCSS", "JavaScript"]
const isBackend = "Back-End"
const backSkills = ["Express.JS", "Node.JS", "MongoDB"]
const tools = ["Webpack", "GoogleAPI", "NPM"]
const code = "https://github.com/NickEast12/Lash-Base"

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
