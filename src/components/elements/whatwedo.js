import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import Marketing from '../../images/svg/marketing.svg'
import Administration from '../../images/svg/business-administration.svg'
import Support from '../../images/svg/customer-support.svg'

const Section = styled.div`
    padding: 8rem 0 4rem;
`
const Col = styled(Column)`
    padding: 0;
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
                columngap="6.5rem"
                rowgap="5rem"
                mobilerowgap="5rem"
            >
                <Col justify="center">
                    <Icon>
                        <Marketing />
                    </Icon>
                    <Header as="h4" align="center" lh="2">
                        Marketing
                    </Header>
                    <Text align="center">
                        We optimise customer touchpoints and user experiences to help companies acquire new customers and increase sales with a data-driven approach.
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <Support />
                    </Icon>
                    <Header as="h4" align="center" lh="2">
                        Customer support
                    </Header>
                    <Text align="center">
                        We deliver best-in-class customer experiences that anticipate challenges, solve problems, and delight customers to increase brand loyalty and repeat sales.
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <Administration />
                    </Icon>
                    <Header as="h4" align="center" lh="2">
                        Business support
                    </Header>
                    <Text align="center">
                        We lower operational costs and keep businesses running with admin support services such as HR operations, finance, recruitment, and accounting.
                    </Text>
                </Col>
            </Grid>
        </Container>
    </Section>
)
export default WhatWeDo
