import styled from 'styled-components';
import { Box } from '@mui/material';
import { IButton } from './button';


export const BoxStyled = styled(Box)<IButton>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: ${props => props.theme.size(2) * 26}px;
    padding: 0px ${props => props.theme.size(1) * 2}px;


    & .MuiButton-root {
        color: ${props => props.theme.themode.primary};
        background-color: ${props => props.theme.themode.onPrimary};
        border-radius: 20px;
        width: 100%;
            &:hover {
            /* background-color: ${props => props.theme.themode.primary}; */
        }
    }
`
