import React from 'react';
import { HeaderStyled, GroupedBox } from './header.style';
import Space from '../../components/space/space';
import { useNavigate } from 'react-router-dom';


import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Tooltip, Menu, MenuItem, Divider } from "@mui/material"
import StyledButton from '../../components/buttons/button';
import { Box } from '@mui/material';
import Logo from '../../assets/images/logo.png';

interface IHeader {
    mode: () => void;
    theme?: any
}

export default function Header({ mode, theme } : IHeader) {

    const Navigate = useNavigate();

  return (
    <HeaderStyled>
        <GroupedBox onClick={() => Navigate("/")}>
            <img src={Logo} width={54}/>
                <Space size={2} height={0}/>
            <h5>e-trosa</h5>
        </GroupedBox>
        <GroupedBox>
            <Tooltip title="Theme Toogle" >
                <GroupedBox onClick={mode}>
                    { theme.name === 'dark-mode' ? <LightModeIcon /> : <DarkModeIcon /> }
                </GroupedBox>
            </Tooltip>
                <Space size={2} height={0}/>
            <StyledButton text={'login'} onClick={() => Navigate("auth/login")} />
                <Space size={2} height={0}/>
            <StyledButton text={'sign up'} onClick={() => Navigate("auth/signup")} />
        </GroupedBox>
    </HeaderStyled>
  );
}
