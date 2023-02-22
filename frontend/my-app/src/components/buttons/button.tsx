import React from "react";
import { BoxStyled } from "./button.style";
import { Button } from "@mui/material";

export interface IButton{
    text?: string,
    color?: string,
    onClick?: () => void,

}

const StyledButton: React.FC<IButton> = ({ text, color, onClick}) => {

    return (
        <BoxStyled color={color}>
            <Button onClick={onClick}>
            {text}
            </Button>
        </BoxStyled>
    )
}

export default StyledButton