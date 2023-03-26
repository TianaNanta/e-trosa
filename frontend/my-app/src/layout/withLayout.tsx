import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { FirstGrid, SecondGrid, BodyDiv } from "./layout.style";


const withLayout = (...WrappedComponent: any) => {
  const Layout = (props: any) => {
    return (
      <>
        <BodyDiv>
          <FirstGrid>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus provident earum a quas dolor nostrum officiis excepturi, nam modi, porro eius non id. Iusto, provident temporibus numquam veritatis cumque non.
          </FirstGrid>
          <SecondGrid>{WrappedComponent[1]}</SecondGrid>
        </BodyDiv>
      </>
    );
  };

  return Layout;
};

export default withLayout;
