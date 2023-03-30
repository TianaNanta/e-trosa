import React from "react";
import { StyledInput } from "./input.style";
import { InputBase } from "@mui/material";

interface IInput {
    id: string,
    label: string,
    type: string,
    value: string,
    setValue: (value : string) => void,
}

const Input: React.FC<IInput> = ({ id, label, type, value, setValue }) => {

    const handleChange = (event: any) => {
        setValue(event.target.value);
      };

    return (
            <StyledInput
                id={id}
                placeholder={label}
                type={type}
                value={value}
                onChange={handleChange}
            />
    )
}

export default Input
