import React from 'react'

import { PaddedBox, StyledDescription, CenterBox, FadeComponent } from './home.style'
import { ThemeProvider } from 'styled-components';

export default function Home() {

    return (
        <>
            <PaddedBox>
                <h2>e - Trosa</h2>
            </PaddedBox>
            <PaddedBox>
                <CenterBox>
                    <FadeComponent>
                        <StyledDescription>
                        e-Trosa app provides an easy-to-use and intuitive platform
                        that helps you manage your debts efficiently, with features such as automatic payments,
                        progress tracking, and personalized insights to guide you towards achieving your financial goals.
                        </StyledDescription>
                    </FadeComponent>
                </CenterBox>
            </PaddedBox>
        </>
    );
}
