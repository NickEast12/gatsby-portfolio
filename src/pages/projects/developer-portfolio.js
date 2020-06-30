import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TemplateProjects from "../../components/sections/templateProjects"

//* Template variables
import TWBphoto from "../../images/p_mockup.png"
const projectName = "Developer Portfolio"
const projectIntro = "A small portfolio project built in React.JS"
const projectInfo = "Front End Developer"
const projectMeta = "Website Development"
const projectAim = "To build a developer portfolio using React.JS and Spring.JS"
const projectDescription =
  "This was a simple developer portfolio built to help me refine my React.JS skills and to help me become a better developer."
const liveSite = "https://github.com/NickEast12/react-portfolio"
const photo = `${TWBphoto}`
const frontSkills = ["JSX", "SCSS", "React.JS"]
const isBackend = "Back-End"
const backSkills = ["Netflify"]
const tools = ["Gulp", "NPM"]
const code = "https://github.com/NickEast12/react-portfolio"

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
