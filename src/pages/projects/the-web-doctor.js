import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TemplateProjects from "../../components/sections/templateProjects"

const TheWebDoctor = () => {
  return (
    <Layout>
      <SEO title="The Web Doctor" />
      <TemplateProjects ProjectName={"The Web Doctor"} />
    </Layout>
  )
}

export default TheWebDoctor
