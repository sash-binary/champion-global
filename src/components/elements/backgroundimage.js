import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const BackgroundSection = ({ img_name }) => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid
                                originalName
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.allImageSharp.edges.find(
                edge => edge.node.fluid.originalName === img_name,
            )
            if (!image) return null

            return (
                <BackgroundImage
                    fluid={image.node.fluid}
                    backgroundColor={`#040e18`}
                ></BackgroundImage>
            )
        }}
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`

BackgroundSection.propTypes = {
    img_name: PropTypes.string,
}

export default StyledBackgroundSection
