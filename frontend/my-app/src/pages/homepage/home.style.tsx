import styled from "styled-components";
import { device } from "../../display/screensize";
import { Fade } from "react-awesome-reveal";
import { ReactNode } from "react";

interface ComponentProps {
  children?: ReactNode;
}

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin-top: 8rem;
  gap: 12px;
`;

export const PaddedBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 12px;
`;

export const NoteDescription = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.size(3)}px;
  color: ${(props) => props.theme.colors.OnSurfaceVariant};
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const FadeComponent = ({ children }: ComponentProps) => {
  return (
    <>
      <Fade cascade direction="up">
        {children}
      </Fade>
    </>
  );
};
