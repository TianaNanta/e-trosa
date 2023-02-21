import React, { useState } from "react";
import { BoxStyled } from "./button.style";
import { Button } from "@mui/material";

interface IButton{
    text: string,
    onClick?: () => void,

}

const StyledButton: React.FC<IButton> = ({ text, onClick }) => {

    return (
        <BoxStyled>
            <Button onClick={onClick}>
            {text}
            </Button>
        </BoxStyled>
    )
}

export default StyledButton