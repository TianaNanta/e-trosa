import React from 'react'
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from 'styled-components';

import Input from '../../../components/input/input';
import StyledButton from '../../../components/buttons/button';

export default function Signup() {

    const navigate = useNavigate();

    const [identity, setIdentity] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    return (
        <>
            
        </>
    );
}