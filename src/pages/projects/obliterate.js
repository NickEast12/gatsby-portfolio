import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TemplateProjects from "../../components/sections/templateProjects"

//* Template variables
import TWBphoto from "../../images/ob_mockup.png"
const projectName = "Obliterate"
const projectIntro = "Custom built shopify store"
const projectInfo = "Front End Developer"
const projectMeta = "Shopfiy Development"
const projectAim =
  "To build a custom Shopify store to promptly get the product to market."
const projectDescription =
  "My client needed a custom-built Shopify store up and running in a couple of days to be able to sell their home manufactured hand sanitizer."
const liveSite = "https://obliteratehandsanitiser.co.uk"
const photo = `${TWBphoto}`
const frontSkills = ["Liquid", "CSS", "SCSS"]
const isBackend = "Back-End"
const backSkills = ["Shopify", "Shopify Plugins"]
const tools = ["Themekit"]
const code = "https://obliteratehandsanitiser.co.uk"

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
