import React from 'react'

import { PaddedBox } from './home.style'
import { ThemeProvider } from 'styled-components';

import Header from '../header/header';
import Layout from '../../layout/layout';

export default function Home() {
    return (
        <Layout>
            <PaddedBox>
                <h1>Hello MF</h1>
            </PaddedBox>
        </Layout>
    );
}