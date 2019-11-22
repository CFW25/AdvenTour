import React from "react"
import Layout from '../components/Layout.js'
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import SimpleHero from "../components/SimpleHero"


export default () => (
    <>
        <Layout>
            <SimpleHero>
                <Banner title="continue exploring"
                        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
            >
        <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink>
            </Banner>
                </SimpleHero>
                <About/>
                <Services/>
        </Layout>
    </>

)