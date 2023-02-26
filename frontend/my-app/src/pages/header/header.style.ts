import styled from 'styled-components';
import { Box , Switch } from '@mui/material';

export const HeaderStyled = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    top: 0;
    position: sticky;
    width: 100%;
    background-color: ${props => props.theme.themode.background};

    &  {
        color : ${props => props.theme.themode.onPrimaryContainer};
        font-size: inherit;
    }
`
