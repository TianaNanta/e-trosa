import styled from 'styled-components'
import { device } from '../display/screensize'

export const FirstGrid = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.primaryContainer};
    margin: 8px 1%;
`

export const SecondGrid = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.secondaryContainer};
    margin: 8px 1%;
`

export const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.MobileS} {
        flex-direction: column;
    }

    @media ${device.Laptop} {
        flex-direction: row;
    }
`