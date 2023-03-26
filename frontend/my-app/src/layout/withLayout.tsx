import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { SideMenu, PageContainer } from "./layout.style";


const withLayout = (...WrappedComponent: any) => {
  const Layout = (props: any) => {
    return (
      <>
          <SideMenu>
            <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </div>
            <div>2</div>
          </SideMenu>
          <PageContainer>{WrappedComponent[1]}</PageContainer>
      </>
    );
  };

  return Layout;
};

export default withLayout;
