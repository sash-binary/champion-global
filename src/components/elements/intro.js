import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header } from '../../themes/typography'
import BackgroundImg from '../../images/intro-bg.jpg'

const Section = styled.div`
    padding: 8rem 0;
    background-image: url(${props => props.img});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
`
const HeroContent = styled(Grid)`
    padding: 0;
`
const Col = styled(Column)`
    padding: 0;
    max-width: 94rem;
`

const Intro = () => (
    <Section img={BackgroundImg}>
        <Container>
            <HeroContent
                columns="1fr"
                columngap="1rem"
                rowgap="5rem"
                mobilerowgap="3rem"
            >
                <Col justify="center">
                    <Header as="h4" align="center" lh="3.6rem">
                        Looking for an advantage over your competitors?
                        Outsource your company’s most important functions to
                        Champion Global experts who will add real, measurable
                        value to your business.
                    </Header>
                </Col>
            </HeroContent>
        </Container>
    </Section>
)
export default Intro
