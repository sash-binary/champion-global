import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header } from '../../themes/typography'
import Button from './button'
import scrollTo from 'gatsby-plugin-smoothscroll'
import BackgroundImg from './backgroundimage'

const HeroContent = styled(Grid)`
    padding: 20rem 0 0;
`
const Col = styled(Column)`
    padding: 0;
    max-width: 60rem;
    text-align: center;
`
const Cta = styled(Button)`
    margin: 4rem 0;
`
const Hero = () => (
    <BackgroundImg
        img_name='header.jpg'
        brightness='0.75'
        style={{height: '90vh', minHeight: '50rem'}}
    >
        <Container id="hero">
            <HeroContent
                columns="1fr"
                justify="center"
            >
                <Col justify="center">
                    <Header as="h1" color="white" align="center">
                        Champion Global Business Services
                    </Header>
                    <Header as="h5" color="white" align="center">
                        World-class support services for FinTech businesses
                    </Header>
                    <Cta
                        onClick={() => scrollTo('#careers')}
                    >
                        Contact Us Now
                    </Cta>
                </Col>
            </HeroContent>
        </Container>
    </BackgroundImg>
)
export default Hero
