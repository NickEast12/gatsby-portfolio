import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TemplateProjects from "../../components/sections/templateProjects"

//* Template variables
import TWBphoto from "../../images/twb_mockup.png"
const projectName = "The Web Doctor"
const projectIntro =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt nec leo a pulvinar."
const projectInfo = "Front End Developer"
const projectMeta = "Website Redesign"
const projectDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt nec leo a pulvinar. Vestibulum tempus quam interdum nisl eleifend ultrices. Vivamus semper fringilla ligula at ultrices. Morbi ornare est nulla, nec pretium quam porta non. Morbi tincidunt vehicula consectetur. Sed pellentesque in mauris at finibus."
const liveSite = "https://www.nick-east.com"
const photo = `${TWBphoto}`
const frontSkills = ["HTML5", "SCSS", "JavaScript", "Gatsby.js"]
const isBackend = "Back-End"
const backSkills = ["Netlify"]
const tools = ["HTML5", "HTML5", "HTML5", "HTML5"]
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
