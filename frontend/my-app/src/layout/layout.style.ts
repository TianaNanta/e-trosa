import { ButtonBaseClassKey } from "@mui/material";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { device } from "../display/screensize";

export const SideMenu = styled.div`
  align-self: start;
  justify-content: space-between;
  align-content: space-between;

  position: sticky;
  overflow: auto;
  height: 100vh;
  top: 48px;
  bottom: 0;

  @media (max-width: 768px) {
    display: none;
  } ;
`;

export const PageContainer = styled.div`
  width: calc(100% - 1rem);
  left: 208px;
  right: 0px;
  top: 48px;
  margin-top: 20px;

  @media (max-width: 768px) {
    left: 0px;
    top: 0px;
    position: relative;
    width: 100%;
  } ;
`;

export const PageContent = tw(PageContainer)`
  ${(props) => (props.$dark ? "bg-slate-800" : "bg-white")}
`

export const RowDiv = styled.div`
  display: grid;
  grid-template-columns: 272px 1fr;
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SideMenuContainer = tw(SideMenu)`
  ${(props) => (props.$dark ? "bg-slate-800" : "bg-white")}
`

