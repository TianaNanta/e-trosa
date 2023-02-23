import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import { IButton } from './button';

const StyledButton = styled(Button)<IButton>`

`

export const BoxStyled = styled(Box)<IButton>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: ${props => props.theme.size(2) * 26}px;
    /* padding: 0px ${props => props.theme.size(1) * 2}px; */

    
    & .MuiButton-root {
        color: #ffffff;
        background-color: ${props => props.theme.themode.color2};
        width: 100%;
    }
`
