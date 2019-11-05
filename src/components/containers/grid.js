import styled from 'styled-components'
import screen from '../../themes/screens'

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.columns || 'auto auto'};
    grid-column-gap: ${props => props.columngap || '0'};
    grid-row-gap: ${props => props.rowgap || '0'};
    justify-items: ${props => props.justify || 'start'};
    align-items: ${props => props.align || 'start'};

    @media ${screen.md} {
        grid-template-columns: ${props => props.mobilecolumns || '1fr'};
        grid-row-gap: ${props => props.mobilerowgap || '0'};
    }
`

export const Column = styled.div`
    padding: ${props => props.padding || '0'};
    align-self: ${props => props.align || 'stretch'};
    justify-self: ${props => props.justify || 'stretch'};
`

export default Grid
