import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import screen from '../../themes/screens'
import Image from './image'

const Section = styled.div`
    position: relative;
    margin: 8rem 0 0;
    padding: 9rem 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const FeaturedGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 45rem;
    grid-column-gap: 3rem;

    @media ${screen.lg} {
        grid-template-columns: 1fr 25rem;
    }
    @media ${screen.md} {
        grid-template-columns: 1fr;
    }
`
const Box = styled.div`
    padding: 10rem;
    width: 65%;
    height: 100%;
    background-color: var(--color-grey);
    border-radius: 0 1rem 1rem 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;

    @media ${screen.xl} {
        width: 75%;
    }
    @media ${screen.lg} {
        width: 85%;
    }
    @media ${screen.md} {
        width: 100%;
        border-radius: 0;
    }
`
const FeaturedImage = styled.div`
    position: relative;
    width: 69.1rem;
    height: 42.6rem;
    left: 0;
    overflow: hidden;

    @media ${screen.lg} {
        left: 5rem;
    }
    @media ${screen.md} {
        left: auto;
        width: 100%;
        max-width: 100%;
        height: auto;
        margin-bottom: 3rem;
    }
`
const Content = styled.div`
    padding: 0;

    @media ${screen.md} {
        margin-bottom: 6rem;
    }
`
const Jobs = styled.ul`
    margin: 1rem 0 0;
`
const Job = styled.li`
    margin: 0 0 2rem 4rem;
    color: var(--color-white);
`

const Careers = () => (
    <Section
        id="careers"
    >
        <Container>
            <FeaturedGrid>
                <Column>
                    <Content>
                        <Header
                            as="h2"
                            color="white"
                            align="left"
                            lh="2"
                            margin="0"
                        >
                            Careers
                        </Header>
                        <Header
                            as="h4"
                            color="white"
                            align="left"
                            lh="2"
                            margin="0"
                        >
                            Life @ Champion Global
                        </Header>
                        <Text color="white">
                            Join leading specialists in the fields of sales, marketing, customer support, finance, HR, recruitment, and more who have come together from all over the world to solve the most challenging problems in financial technology.
                        </Text>
                        <Text color="white" margin="2rem 0">
                            At Champion Global, we empower exceptional talent by giving them the freedom and tools they need to explore their ideas and push into new frontiers.
                        </Text>
                        <Text color="white">
                            With a collaborative culture that places teamwork above all else, you will also find the support you need to expand your horizons and live up to your full potential.
                        </Text>
                        <Header
                            as="h5"
                            color="white"
                            align="left"
                            lh="2"
                            margin="1.2rem 0 0.6rem"
                            weight="bold"
                        >
                            We’re currently hiring for these roles:
                        </Header>
                        <Jobs>
                            <Job>Marketing Executive</Job>
                            <Job>Affiliate/Country Manager</Job>
                            <Job>Technical Marketing Executive</Job>
                            <Job>Customer Support Executive</Job>
                        </Jobs>
                    </Content>
                </Column>
                <Column
                    align="center"
                >
                    <FeaturedImage>
                    <Image
                        width="691px"
                        img_name="careers.png"
                        alt="who we are"
                    />
                    </FeaturedImage>
                </Column>
            </FeaturedGrid>
        </Container>
        <Box />
    </Section>
)
export default Careers
