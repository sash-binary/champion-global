import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import screen from '../../themes/screens'
import scrollTo from 'gatsby-plugin-smoothscroll'
import HeaderLogo from '../../images/svg/champion-logo.svg'

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    padding: 1rem 0;
    z-index: 9;
`

const Logo = styled.div`
    width: 12.5rem;
    padding: 1rem 0;
    text-align: left;
    cursor: pointer;

    @media ${screen.md} {
        text-align: center;
        margin: 0 auto;
    }
`

const Nav = styled.ul`
    width: 100%;
    text-align: right;
    padding: 0;

    @media ${screen.md} {
        text-align: center;
    }
`

const NavLink = styled.li`
    list-style-type: none;
    display: inline-block;
    text-align: left;
    margin: 0 1rem;
    color: var(--color-white);
    cursor: pointer;

    @media ${screen.md} {
        line-height: 3rem;
    }
`

const Header = () => (
    <StyledHeader>
        <Container>
            <Grid
                columns="1fr 6fr"
                columngap="1rem"
                rowgap="5rem"
                mobilerowgap="3rem"
            >
                <Column align="center">
                    <Logo onClick={() => scrollTo('#hero')}>
                        <HeaderLogo />
                    </Logo>
                </Column>
                <Column align="center">
                    <Nav>
                        <NavLink
                            onClick={() => scrollTo('#what')}
                        >
                            What we do
                        </NavLink>
                        <NavLink
                            onClick={() => scrollTo('#offer')}
                        >
                            What we offer
                        </NavLink>
                        <NavLink
                            onClick={() => scrollTo('#who')}
                        >
                            Who we are
                        </NavLink>
                        <NavLink
                            onClick={() => scrollTo('#careers')}
                        >
                            Careers
                        </NavLink>
                        <NavLink
                            onClick={() => scrollTo('#withus')}
                        >
                            Work with us
                        </NavLink>
                    </Nav>
                </Column>
            </Grid>
        </Container>
    </StyledHeader>
)

export default Header
