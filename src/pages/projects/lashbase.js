import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TemplateProjects from "../../components/sections/templateProjects"

//* Template variables
import TWBphoto from "../../images/lb_mockup.png"
const projectName = "LashBase"
const projectIntro = "lorem lorem lorem lorems"
const projectInfo = "Front End Developer"
const projectMeta = "App Development"
const projectDescription = "lorem lorem lorem lorem lorem"
const liveSite = "https://www.nick-east.com"
const photo = `${TWBphoto}`
const frontSkills = ["PUG", "SCSS", "JavaScript"]
const isBackend = "Back-End"
const backSkills = ["Express.JS", "Node.JS", "MongoDB"]
const tools = ["Webpack", "GoogleAPI", "NPM"]
const code = "https://www.nick-east.com"

const TheWebDoctor = () => {
  return (
    <Layout>
      <SEO title="The Web Doctor" />
      <TemplateProjects
        ProjectName={projectName}
        ProjectIntro={projectIntro}
        ProjectInfo={projectInfo}
        ProjectMeta={projectMeta}
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
