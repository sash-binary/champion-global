import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import screen from '../../themes/screens'
import BackgroundImg from '../../images/grey-bg.png'
import Image from './image'

const Section = styled.div`
    padding: 8rem 0;
    width: 100%;
    min-height: 58.6rem;
    background-image: url(${props => props.img});
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: auto;

    @media ${screen.md} {
        background-size: cover;
    }
`
const Content = styled.div`
    padding: 0;

    @media ${screen.md} {
        margin-bottom: 6rem;
    }
`
const Jobs = styled.ul`
    margin: 0.6rem 0 0;
`
const Job = styled.li`
    margin: 0 0 2rem;
    display: block;
    color: var(--color-white);
`

const Careers = () => (
    <Section id="careers" img={BackgroundImg}>
        <Container>
            <Grid
                columns="1fr 1fr"
                columngap="3rem"
                align="center"
            >
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
                        <Text color="white">
                            Join leading specialists in the fields of sales,
                            marketing, customer support, finance, HR, recruitment,
                            and more who have come together from all over the world
                            to solve the most challenging problems in FinTech.
                        </Text>
                        <Header
                            as="h5"
                            color="white"
                            align="left"
                            lh="2"
                            margin="1.2rem 0 0.6rem"
                            weight="normal"
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
                <Column>
                    <Image
                        width="682px"
                        img_name="careers.jpg"
                        alt="who we are"
                    />
                </Column>
            </Grid>
        </Container>
    </Section>
)
export default Careers
