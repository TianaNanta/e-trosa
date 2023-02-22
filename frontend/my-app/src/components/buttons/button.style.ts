import styled from 'styled-components';
import { Box } from '@mui/material';
import { IButton } from './button';


export const BoxStyled = styled(Box)<IButton>`
    display: flex;
    background-color: ${props => props.theme.themode.color4};
    padding: 10px;
`
