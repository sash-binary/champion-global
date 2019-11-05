import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import screen from '../../themes/screens'
import BackgroundImg from '../../images/blue-bg.png'
import Image from './image'

const Section = styled.div`
    padding: 8rem 0;
    margin-top: 8rem;
    width: 100%;
    min-height: 58.6rem;
    background-color: none;
    background-image: url(${props => props.img});
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: auto;

    @media ${screen.md} {
        background-size: cover;
    }
`
const Content = styled.div`
    padding: 0;

    @media ${screen.md} {
        margin-top: 6rem;
    }
`

const WhoWeAre = () => (
    <Section id="who" img={BackgroundImg}>
        <Container>
            <Grid
                columns="1fr 1fr"
                columngap="3rem"
            >
                <Column
                    align="center"
                >
                    <Image
                        width="682px"
                        img_name="whoweare.jpg"
                        alt="who we are"
                    />
                </Column>
                <Column>
                    <Content>
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
                            Champion Global Business Services is a business process
                            outsourcing company based in Cyberjaya — Malaysia’s
                            pioneer tech hub.
                        </Text>
                        <Text color="white" margin="2rem 0 0">
                            Founded in 2019 by the Binary Group, we operate at the
                            intersection of finance and technology — powered by 20
                            years of innovation. Our mission is to help you achieve
                            extraordinary growth through a deep understanding of
                            data, technology, and consumer behaviour.
                        </Text>
                    </Content>
                </Column>
            </Grid>
        </Container>
    </Section>
)
export default WhoWeAre
