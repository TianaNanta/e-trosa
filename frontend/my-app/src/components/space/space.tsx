import React from "react";
import StyledSpace from "./space.style";

export interface ISpace {
    size: number;
}

const Space: React.FC<ISpace> = ({ size }) => {
    return <StyledSpace size={size} />
}

export default Space