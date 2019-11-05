import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import Marketing from '../../images/svg/retain-customers.svg'
import Overhead from '../../images/svg/reduce-overhead.svg'
import Sales from '../../images/svg/drive-sales.svg'

const Section = styled.div`
    padding: 8rem 0;
    border: 1px solid #f2f2f2;
`
const Col = styled(Column)`
    padding: 5.4rem 4rem;
    background-color: var(--color-blue);
    border-radius: 0.6rem;
    text-align: center;
`
const Icon = styled.div`
    padding: 0 0 2.4rem;
`

const WhatWeDo = () => (
    <Section id="what">
        <Container>
            <Header as="h2" align="center" lh="2" margin="0 0 4rem">
                What we do
            </Header>
            <Grid
                columns="repeat(3, 1fr)"
                columngap="5.8rem"
                rowgap="5rem"
                mobilerowgap="3rem"
            >
                <Col justify="center">
                    <Icon>
                        <Sales />
                    </Icon>
                    <Header as="h4" color="white" align="center" lh="2">
                        Drive sales
                    </Header>
                    <Text color="white" align="center">
                        Our marketing experts will grow your brand, generate
                        leads, and acquire new customers for your business.
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <Marketing />
                    </Icon>
                    <Header as="h4" color="white" align="center" lh="2">
                        Retain customers
                    </Header>
                    <Text color="white" align="center">
                        We will show you how to consistently add value to your
                        customers’ lives to increase brand loyalty and keep them
                        coming back.
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <Overhead />
                    </Icon>
                    <Header as="h4" color="white" align="center" lh="2">
                        Reduce overhead
                    </Header>
                    <Text color="white" align="center">
                        Our specialists can manage your HR, talent recruitment,
                        finances, and more to help you lower operational costs.
                    </Text>
                </Col>
            </Grid>
        </Container>
    </Section>
)
export default WhatWeDo
