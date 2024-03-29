import React from 'react'
import Layout from '../components/Layout'
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"
import { graphql } from 'gatsby'


const tours = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.defaultBcg.childImageSharp.fluid} />

            <Tours />
        </Layout>
    )
}
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default tours
