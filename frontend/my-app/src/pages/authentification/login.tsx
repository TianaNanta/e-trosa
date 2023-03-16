import React from 'react'
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import { BackgroundLogin, CenterLogin } from './auth.style';

import Input from '../../components/input/input';
import StyledButton from '../../components/buttons/button';
import Space from '../../components/space/space';

export default function Login() {

    const navigate = useNavigate();

    const [identity, setIdentity] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    return (
        <>
            <BackgroundLogin>
                <CenterLogin>
                <Input
                    id='User'
                    label='User'
                    type='text'
                    value={identity}
                    setValue={setIdentity}
                    />
                    <Space size={0} height={2}/>
                    <Input
                    id='Password'
                    label='Password'
                    type='password'
                    value={password}
                    setValue={setPassword}
                    />
                </CenterLogin>
            </BackgroundLogin>
        </>
    );
}
