import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { SideMenu, PageContainer, RowDiv, TailContainer } from "./layout.style";

const withLayout = (...WrappedComponent: any) => {
  const Layout = (props: any) => {
    return (
      <>
        <RowDiv>
          <SideMenu>
            <TailContainer>
                <div>header</div>
            </TailContainer>
          </SideMenu>
          <PageContainer>
            <div>
              <h2>Dashboard Page</h2>
            </div>
          </PageContainer>
        </RowDiv>
        <div>footer</div>
      </>
    );
  };

  return Layout;
};

export default withLayout;
