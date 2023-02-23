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
    border-width : 1;
    border-color: #eaecf0;
`
export const RowBox = styled(Box)`
    display: flex;
    flex-direction: row;
`

export const ColumnBox = styled(Box)`
    display: flex;
    flex-direction: column;
`