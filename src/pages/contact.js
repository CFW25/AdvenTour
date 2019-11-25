import React from 'react'
import StyledHero from "../components/StyledHero"
import Layout from '../components/Layout.js'
import Contact from '../components/Contact/Contact'

const contact = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.connectBcg.childImageSharp.fluid} />
            <Contact/>
        </Layout>
    )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
