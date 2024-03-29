import styled from 'styled-components';
import { Box , Switch } from '@mui/material';

export const HeaderStyled = styled(Box)`
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    top: 0;
    position: sticky;
    width: 100%;
    background-color: ${props => props.theme.colors.background };
    box-sizing: border-box;
    border-color: ${props => props.theme.colors.outline};
    border-width: 1px;
    border-style: none none solid none;
    padding: 6px 12px;

    & {
        color : ${props => props.theme.name === 'light-mode' ? 'black' : 'white'};
    }

`

export const GroupedBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;

    &  {

        & .MuiButton-root {
            color : ${props => props.theme.name === 'light-mode' ? 'black' : 'white'};
        }
    }
`
