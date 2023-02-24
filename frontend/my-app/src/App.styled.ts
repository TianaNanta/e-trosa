import styled from 'styled-components';
import { Box, Container, Grid } from '@mui/material';
import { device } from './display/screensize';

export const AppBackground = styled.div`
    background-color: ${props => props.theme.themode.color1}
`

export const CenterBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.MobileS} {
        flex-direction: column;
    }
    @media ${device.MobileM} {
        flex-direction: column;
    }
    @media ${device.MobileL} {
        flex-direction: column;
    }
    @media ${device.Tablet} {
        flex-direction: column;
    }
    @media ${device.Laptop} {
        flex-direction: row;
    }
    @media ${device.LaptopL} {
        flex-direction: row;
    }
    @media ${device.Desktop} {
        flex-direction: row;
    }

`
export const BorderBox = styled(Box)`
    border-style : solid;
    border-width : 0;
    border-color: #eaecf0;
`

export const BorderBoxRadius = styled(BorderBox)`
    border-radius: 10px;
`

export const CenterBoxWithMargin = styled(CenterBox)`
    margin-top: ${props => props.theme.size(1) * 2}px;

    @media ${device.Tablet} {
        margin-top: ${props => props.theme.size(1) * 2}px;
        margin-bottom: ${props => props.theme.size(1) * 2}px;
    }
`