import React from "react";
import { StyledInput } from "./input.style";

import { UserThemeContext } from "../../layout/withTheme";
export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string,
    label: string,
    type: string,
    value: string,
    setValue: (value : string) => void,
  }

const Input: React.FC<IInputProps> = ({ id, label, type, value, setValue }) => {

    const themevalue = React.useContext(UserThemeContext);
    let dark = themevalue.name === "dark-mode" ? "true" : null;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      };

    return (
            <StyledInput
                color={dark as unknown as string} // here I tell Typescript that dark is a string because color accept only string
                                                // so I need to convert to unknown and then to string
                id={id}
                placeholder={label}
                type={type}
                value={value}
                onChange={handleChange}
            />
    )
}

export default Input
