import { Button } from "@mui/material";
import React from "react";
import { BoxStyled } from "./button.style";

export interface IButton{
    text?: string,
    color?: string,
    onClick?: () => void,

}

const StyledButton: React.FC<IButton> = ({ text, color, onClick}) => {

    return (
            <BoxStyled onClick={onClick}>
                <Button>
                    {text}
                </Button>
            </BoxStyled>
    )
}

export default StyledButton