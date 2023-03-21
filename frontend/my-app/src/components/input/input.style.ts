import styled from 'styled-components';
import { Box }  from "@mui/material";


export const BoxStyled = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: ${props => props.theme.size(5) * 6}px;
    max-width: 440px;
    font-family: ${props => props.theme.typography.heading};
    box-sizing: border-box;

    & .MuiInputBase-root {
        height: 44px;
        width: 90%;
        padding: 10px;
        border-color: transparent;
        border-radius: ${props => props.theme.size(2)}px;
        border: solid 1px ${props => props.theme.colors.outline};
        background-color: transparent;
        color: ${props => props.theme.colors.OnSurfaceVariant};

        &:focus-within {
            border: solid 2px ${props => props.theme.colors.outline};
        }
    };


`
