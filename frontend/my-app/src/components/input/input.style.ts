import styled from 'styled-components';
import { Box }  from "@mui/material";


export const BoxStyled = styled(Box)`
    display: flex;
    min-width: ${props => props.theme.size(5) * 6}px;
    font-family: ${props => props.theme.typography.heading};

    & .MuiInputBase-root {
        border-color: transparent;
        border-radius: ${props => props.theme.size(2)}px;
        border: solid 1px ${props => props.theme.themode.outline};
        background-color: ${props => props.theme.themode.surfaceVariant};
        color: ${props => props.theme.themode.onSurfaceVariant};

        &:hover {
        }
    };

    & .MuiInputBase-root {
        padding: 10px;
    };

    & .MuiInput-underline {
        border-bottom: none;
    }

`