import React from 'react'
import { useNavigate } from "react-router-dom";

import StyledButton from '../../components/buttons/button';
import { BackgroundLogin, CenterLogin } from './auth.style';

import Input from '../../components/input/input';
import Space from '../../components/space/space';

export default function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    return (
        <>
            <BackgroundLogin>
                <CenterLogin>
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
                </CenterLogin>
            </BackgroundLogin>
        </>
    );
}
