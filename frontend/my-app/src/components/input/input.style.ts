import styled from 'styled-components';
import { Box }  from "@mui/material";


export const BoxStyled = styled(Box)`
    display: flex;
    min-width: ${props => props.theme.size(5) * 12}px;
    border: solid 1px ${props => props.theme.themode.color4};
    font-family: ${props => props.theme.typography.heading};

    & .MuiInputBase-root {
        /* background-color : red; */
        border-color: transparent;

        &:hover {
            background-color: ${props => props.theme.themode.color4};
            border: none;
        }
    };

    & .MuiInputBase-root {
        padding: 10px;
    };

    & .MuiInput-underline {
        border-bottom: none;
    }

`