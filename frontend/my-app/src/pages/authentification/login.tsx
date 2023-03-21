import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import { BackgroundLogin, ColumnBox, RowBox } from './auth.style';

import Input from '../../components/input/input';
import StyledButton from '../../components/buttons/button';
import Space from '../../components/space/space';

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <>
            <BackgroundLogin>
                <ColumnBox>
                    <Input
                        id='User'
                        label='User'
                        type='text'
                        value={user}
                        setValue={setUser}
                        />
                        <Space size={0} height={2}/>
                        <Input
                        id='Password'
                        label='Password'
                        type='password'
                        value={password}
                        setValue={setPassword}
                        />
                </ColumnBox>
            </BackgroundLogin>
        </>
    );
}
