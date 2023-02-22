import styled from 'styled-components';
import { Box, Container, Grid } from '@mui/material';

export const AppBackground = styled.div`
    background-color: ${props => props.theme.themode.color1}
`

export const CenterBox = styled(Box)`
    display: flex;
    justify-content: center;
    padding: 5% 10%;
`
export const BorderBox = styled(Box)`
    border-style : solid;
    border-width : 1;
    border-color: #eaecf0;
`