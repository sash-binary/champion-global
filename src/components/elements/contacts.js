import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import { Column } from '../containers/grid'
import { Header } from '../../themes/typography'
import screen from '../../themes/screens'
import Image from './image'

const Section = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media ${screen.xs} {
        background-color: white;
    }
`
const FeaturedGrid = styled.div`
    display: grid;
    grid-template-columns: 15rem 1fr;
    grid-column-gap: 0;

    @media ${screen.xs} {
        grid-template-columns: 1fr;
    }
`
const Col = styled(Column)`
    padding: 0;
`
const Box = styled.div`
    padding: 10rem;
    width: 50%;
    height: 100%;
    background-color: #098dd5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
`
const FeaturedImage = styled.div`
    position: relative;
    left: 0;
    display: block;

    @media ${screen.xs} {
        display: none;
    }
`
const Content = styled.div`
    padding: 4rem 0;
    height: 100%;
    display: grid;
    align-items: center;
    grid-row-gap: 0;
    margin-left: 5rem;

    @media ${screen.md} {
        margin-left: 0;
    }
`

const Contact = () => (
    <Section id="withus">
        <Container>
            <FeaturedGrid>
                <Col>
                    <FeaturedImage>
                        <Image
                            width="284px"
                            img_name="asset-4.png"
                            alt="who we are"
                        />
                    </FeaturedImage>
                </Col>
                <Col bgcolor="white">
                    <Content>
                        <Header as="h4" align="left">
                            If you’re interested,
                        </Header>
                        <Header as="h4" align="left">
                            please send your CV and a cover letter to
                        </Header>
                        <Header as="h4" align="left" color="blue">
                            hr@championgbs.com
                        </Header>
                    </Content>
                </Col>
            </FeaturedGrid>
        </Container>
        <Box />
    </Section>
)
export default Contact
