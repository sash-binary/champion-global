import React  from 'react'
import styled from 'styled-components'
//import screen from '../../themes/screens'
import scrollTo from 'gatsby-plugin-smoothscroll'
import LogoDark from '../../images/svg/champion-logo-dark.svg'

const StyledNav = styled.div`
    position: fixed;
    top: 0;
    left: -30rem;
    padding: 2rem;
    width: 25rem;
    height: 100vh;
    z-index: 9;
    transition: left 0.25s ease-in-out;
    background-color: var(--color-white);
    box-shadow: 0.5rem 0 2rem rgba(0,0,0,0.3);
    overflow: auto;

    &.active {
        left: 0;
    }
`

const Logo = styled.div`
    width: 12.5rem;
    padding: 1rem 0;
    text-align: left;
    cursor: pointer;
`
const Nav = styled.ul`
    width: 100%;
    margin: 1.5rem 0;
`

const NavLink = styled.li`
    line-height: 3rem;
    color: var(--color-black);
    font-size: 1.6rem;
    display: block;
    margin: 1rem 0;
    cursor: pointer;

    &:hover {
        color: var(--color-blue);
    }
`
const MobileNav = () => {
    return (
        <StyledNav id="mob-nav">
            <Logo onClick={() => scrollTo('#hero')}>
                <LogoDark />
            </Logo>
            <Nav id="man-nav">
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
        </StyledNav>
    )
}

export default MobileNav
