import React, { useState } from "react";
import { BoxStyled } from "./input.style";
import { TextField } from "@mui/material";

interface IInput {
    id: string,
    label: string,
    type: string,
}

const Input: React.FC<IInput> = ({ id, label, type }) => {

    const [text, setText] = useState('');

    const handleChange = (event: any) => {
        setText(event.target.value);
      };

    return (
        <BoxStyled>
            <TextField 
                id={id}
                label={label}
                type={type}
                value={text}
                onChange={handleChange}
            />
        </BoxStyled>
    )
}

export default Input