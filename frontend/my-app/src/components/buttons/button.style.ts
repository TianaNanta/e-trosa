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
        color: ${props => props.theme.themode.color4};
        background-color: ${props => props.theme.themode.color3};
        width: 100%;
            &:hover {
            background-color: ${props => props.theme.themode.color4};
        }
    }
`
