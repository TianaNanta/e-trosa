import styled from 'styled-components';
import { Box } from '@mui/material';
import { IButton } from './button';
import { device } from '../../display/screensize';


export const BoxStyled = styled(Box)<IButton>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    background-color: ${props => props.color};

    
    & .MuiButton-root {
        width: 100%;
        border-radius: 15px;

        @media ${device.MobileS} {
            min-width: ${props => props.theme.size(2) * 6}px;
            font-size: ${props => props.theme.size(2) + 2}px;
        }

        @media ${device.MobileM} {
            min-width: ${props => props.theme.size(3) * 6}px;
            font-size: ${props => props.theme.size(3) + 2}px;
        }

        @media ${device.MobileL} {
            min-width: ${props => props.theme.size(3) * 6}px;
            font-size: ${props => props.theme.size(3) + 2}px;
        }

        @media ${device.Tablet} {
        min-width: ${props => props.theme.size(3) * 6}px;
        font-size: ${props => props.theme.size(3) + 2}px;
        }

        @media ${device.Laptop} {
            min-width: ${props => props.theme.size(3) * 6}px;
            font-size: ${props => props.theme.size(3) + 2}px;
        }

        @media ${device.LaptopL} {
            min-width: ${props => props.theme.size(4) * 6}px;
            font-size: ${props => props.theme.size(4) + 2}px;

        }

        @media ${device.Desktop} {
            min-width: ${props => props.theme.size(5) * 6}px;
            font-size: ${props => props.theme.size(5) + 2}px;
        }
    }
`
