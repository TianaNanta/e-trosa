import React from "react";
import styled from "styled-components";
import { UserThemeContext } from "./withTheme";
import tw from "tailwind-styled-components";
import { device } from "../display/screensize";

interface LayoutProps {
  children: React.ReactNode;
}

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
`;

export const RowDiv = styled.div`
  display: grid;
  grid-template-columns: 272px 1fr;
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SideGrid = styled.div`
  display: grid;
`;

export const SideMenuContainer = tw(SideMenu)`
  ${(props) => (props.$dark ? "bg-slate-800" : "bg-white")}
`;

// Extends styled components for props usage otherwise it throws an error
// example: tw(StyledDiv) instead of tw.div for $dark props usage
export const StyledSideGrid = tw(SideGrid)` 
  grid grid-cols-1 gap-y-4 mt-4 ml-2

  div {
    

    h5 {
      mb-8 lg:mb-3 font-semibold
      ${(props) => (props.$dark ? "text-slate-400" : "text-slate-800")}

      ul {
        space-y-6 lg:space-y-2 border-l
        ${(props) => (props.$dark ? "border-slate-800" : "border-slate-100")}

      }

    }


  }
`;
const Li = styled.li``;
export const StyledList = tw(Li)`
  pl-4 border-transparent
  ${(props) =>
    props.dark ? "text-slate-400 hover:text-slate-300" : "text-slate-800"}
`;

export const StyledListComponent: React.FC<LayoutProps> = ({ children }) => {
  const themevalue = React.useContext(UserThemeContext);
  let dark = themevalue.name === "dark-mode" ? true : false;
  return <StyledList dark={dark}>{children}</StyledList>;
};
