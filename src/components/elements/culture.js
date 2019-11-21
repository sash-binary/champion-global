import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'

const Section = styled.div`
    padding: 8rem 0;
    margin-top: 8rem;
    background-color: var(--color-light-grey);
`
const Col = styled(Column)`
    padding: 0;
    text-align: center;
`

const Culture = () => (
    <Section id="culture">
        <Container>
            <Header as="h2" align="center" lh="2" margin="0 0 2rem">
                Our culture
            </Header>
            <Text align="center" margin="0 0 4rem">
                Our culture defines the way we operate and achieve our goals.
            </Text>
            <Grid
                columns="repeat(2, 1fr)"
                columngap="6.5rem"
                rowgap="5rem"
                mobilerowgap="5rem"
            >
                <Col justify="center">
                    <Header as="h4" align="center" lh="2">
                        Teamwork
                    </Header>
                    <Text align="center">
                        We pride ourselves on a collaborative culture where
                        everyone is like a second family. We always come
                        together to solve challenges and achieve common goals.
                    </Text>
                </Col>
                <Col justify="center">
                    <Header as="h4" align="center" lh="2">
                        Integrity
                    </Header>
                    <Text align="center">
                        We believe in always doing the right thing. We base our
                        decisions on our moral principles and don’t look for the
                        easy way out.
                    </Text>
                </Col>
                <Col justify="center">
                    <Header as="h4" align="center" lh="2">
                        Competence
                    </Header>
                    <Text align="center">
                        Our people are smart, talented, and always ready to roll
                        up their sleeves and get things done.
                    </Text>
                </Col>
                <Col justify="center">
                    <Header as="h4" align="center" lh="2">
                        Open communication
                    </Header>
                    <Text align="center">
                        We encourage open communication and discussions about
                        our work processes and strategy. Everyone’s opinion is
                        valued and we strive to be as transparent as possible.
                    </Text>
                </Col>
            </Grid>
        </Container>
    </Section>
)
export default Culture
