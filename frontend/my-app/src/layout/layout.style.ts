import styled from "styled-components";
import { device } from "../display/screensize";

export const SideMenu = styled.div`
  background-color: ${(props) => props.theme.colors.primaryContainer};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 276px;

  position: absolute;
  width: 208px;
  left: 0px;
  top: 48px;
  bottom: 0px;
`;

export const PageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryContainer};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  position: absolute;
  height: 731px;
  left: 208px;
  right: 0px;
  top: 48px;
`;
