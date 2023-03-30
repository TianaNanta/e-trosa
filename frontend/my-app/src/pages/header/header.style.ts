import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { Box , Switch } from '@mui/material';

export const HeaderStyled = styled(Box)`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    top: 0;
    position: sticky;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.name === 'light-mode' ? "bg-white" : "bg-slate-800"};
    border-color: #C4C4C4;
    padding: 0px 16px;

    & {
        color : ${props => props.theme.name === 'light-mode' ? 'black' : 'white'};
    }

`

export const GroupedBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    &  {

        & .MuiButton-root {
            color : ${props => props.theme.name === 'light-mode' ? 'black' : 'white'};
        }
    }
`

// we are sending a props of $dark to the tailwind styled components
// because we cannot access the props.theme.name of the styled components HOC
// we can use interface to make the props type safe and required using
// styled components regular syntax : tw.div<interface>
export const HeaderColor = tw(HeaderStyled)`
${(p) => (p.$dark ? "bg-slate-800" : "bg-white")}
` 
