import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header } from '../../themes/typography'

const Section = styled.div`
    padding: 0;
`
const Row = styled(Grid)`
    padding: 8rem 0;
`
const Col = styled(Column)`
    padding-left: 0;
`

const Contact = () => (
    <Section id="withus">
        <Container>
            <Row
                columns="1fr"
                mobilerowgap="3rem"
                align="center"
            >
                <Column>
                </Column>
                <Col align="center">
                    <Header as="h4" align="left" lh="3.6rem">
                        If you’re interested,
                    </Header>
                    <Header as="h4" align="left" lh="3.6rem">
                        please send your CV and a cover letter to
                    </Header>
                    <Header as="h4" align="left" lh="3.6rem" color="blue">
                        hr@championgbs.com
                    </Header>
                </Col>
            </Row>
        </Container>
    </Section>
)
export default Contact
