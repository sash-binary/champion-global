import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import Marketing from '../../images/svg/marketing.svg'
import Administration from '../../images/svg/business-administration.svg'
import Support from '../../images/svg/customer-support.svg'

const Section = styled.div`
    padding: 8rem 0;
    background-color: var(--color-light-grey);
`
const Col = styled(Column)`
    padding: 0;
    text-align: center;
`
const Icon = styled.div`
    padding: 0 0 2.4rem;
`

const CoreOffering = () => (
    <Section id="offer">
        <Container>
            <Header as="h2" align="center" lh="2" margin="0 0 4rem">
                Our core offering
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
                        Optimise your brand experience and all customer
                        touchpoints to acquire new customers and increase sales.
                        Our data-driven approach to marketing will also reduce
                        acquisition costs by targeting the right audience on the
                        right platforms.
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
                        Help your customers succeed by anticipating and tackling
                        challenges before they arise. We’ll deliver a
                        world-class customer experience driven by a
                        multilingual, omnichannel, and measurable strategy that
                        delights your customers.
                    </Text>
                </Col>
                <Col justify="center">
                    <Icon>
                        <Administration />
                    </Icon>
                    <Header as="h4" align="center" lh="2">
                        Business administration
                    </Header>
                    <Text align="center">
                        Keep your business running seamlessly with our business
                        process services. Our specialists will manage your HR,
                        talent recruitment, finance, accounting, and other
                        administrative processes to help you lower your
                        operational costs.
                    </Text>
                </Col>
            </Grid>
        </Container>
    </Section>
)
export default CoreOffering
