import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import screen from '../../themes/screens'
import Image from './image'

const Section = styled.div`
    position: relative;
    margin: 8rem 0 0 0;
    padding: 9rem 0;
    width: 100%;
    height: 100%;
`
const FeaturedGrid = styled.div`
    display: grid;
    grid-template-columns: 45rem 1fr;
    grid-column-gap: 3rem;

    @media ${screen.lg} {
        grid-template-columns: 25rem 1fr;
    }
    @media ${screen.md} {
        grid-template-columns: 1fr;
    }
`
const Box = styled.div`
    padding: 10rem;
    width: 65%;
    height: 100%;
    background-color: var(--color-blue);
    border-radius: 1rem 0 0 1rem;
    position: absolute;
    top: 0;
    right: 0;
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
    width: 68rem;
    height: 34rem;
    left: -23rem;

    @media ${screen.lg} {
        left: -43rem;
    }
    @media ${screen.md} {
        left: auto;
        width: 100%;
        max-width: 100%;
        height: auto;
        margin-bottom: 3rem;
    }
`

const WhoWeAre = () => (
    <Section
        id="who"
    >
        <Container>
            <FeaturedGrid>
                <Column>
                    <FeaturedImage>
                    <Image
                        width="682px"
                        img_name="whoweare.png"
                        alt="who we are"
                    />
                    </FeaturedImage>
                </Column>
                <Column
                    align="center"
                >
                    <Header
                        as="h2"
                        color="white"
                        align="left"
                        lh="2"
                        margin="0"
                    >
                        Who we are
                    </Header>
                    <Text color="white">
                        Champion Global Business Services is a business process outsourcing company based in Cyberjaya — Malaysia’s pioneer tech hub.
                    </Text>
                    <Text color="white" margin="2rem 0 0">
                        Founded in 2019 by the Binary Group, we operate at the intersection of finance and technology — powered by 20 years of innovation. Our mission is to help you achieve extraordinary growth through a deep understanding of data, technology, and consumer behaviour.
                    </Text>
                </Column>
            </FeaturedGrid>
        </Container>
        <Box />
    </Section>
)
export default WhoWeAre

