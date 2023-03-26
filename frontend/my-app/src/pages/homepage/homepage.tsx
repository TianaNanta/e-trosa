import React from "react";

import {
  PaddedBox,
  NoteDescription,
  CenterBox,
  FadeComponent,
} from "./home.style";

export default function Home() {
  return (
    <>
      <PaddedBox>
        <h2>e - Trosa</h2>
      </PaddedBox>
      <PaddedBox>
        <CenterBox>
          <FadeComponent>
            <NoteDescription>
              e-Trosa app provides an easy-to-use and intuitive platform that
              helps you manage your debts efficiently.
            </NoteDescription>
          </FadeComponent>
        </CenterBox>
      </PaddedBox>
    </>
  );
}
