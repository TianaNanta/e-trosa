import { Button } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import { BoxStyled } from "./button.style";

export interface IButton{
    text?: string,
    color?: any,
    onClick?: () => void,

}

const StyledButton: React.FC<IButton> = ({ text, color , onClick}) => {

    return (
            <BoxStyled color={color} onClick={onClick}>
                <Button variant="text" size="small">
                    {text}
                </Button>
            </BoxStyled>
    )
}

export default StyledButton
