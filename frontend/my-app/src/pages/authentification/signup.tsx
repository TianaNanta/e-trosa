import React from 'react'
import { useNavigate } from "react-router-dom";

import StyledButton from '../../components/buttons/button';
import { BackgroundLogin, ColumnBox, RowBox } from './auth.style';

import Input from '../../components/input/input';
import Space from '../../components/space/space';

export default function Signup() {

    const navigate = useNavigate();

    const [firstname, setFirstname] = React.useState<string>('');
    const [lastname, setLastname] = React.useState<string>('');
    const [user, setUser] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    return (
        <>
            <BackgroundLogin>
                <ColumnBox>
                    <RowBox>
                        <Input
                            id='First Name'
                            label='First Name'
                            type='text'
                            value={firstname}
                            setValue={setFirstname}
                            />
                            <Space size={0} height={2}/>
                            <Input
                            id='Last Name'
                            label='Last Name'
                            type='text'
                            value={lastname}
                            setValue={setLastname}
                            />
                    </RowBox>
                        <Space size={0} height={5}/>
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
                </ColumnBox>
            </BackgroundLogin>
        </>
    );
}
