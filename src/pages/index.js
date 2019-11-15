import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
//import Image from '../components/image'
import Hero from '../components/elements/hero'
import Intro from '../components/elements/intro'
import WhatWeDo from '../components/elements/whatwedo'
import WhoWeAre from '../components/elements/whoweare'
import CoreOffering from '../components/elements/coreoffering'
import Careers from '../components/elements/careers'
import Contact from '../components/elements/contacts'

const Home = () => (
    <>
        <Layout>
            <SEO title="Welcome" />
            <Hero />
            <Intro />
            <WhatWeDo />
            <CoreOffering />
            <WhoWeAre />
            <Careers />
            <Contact />
        </Layout>
    </>
)

export default Home