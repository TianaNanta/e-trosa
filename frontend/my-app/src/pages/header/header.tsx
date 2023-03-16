import React from 'react';
import { HeaderStyled, GroupedBox } from './header.style';
import Space from '../../components/space/space';


import { Box } from '@mui/material';
import { StyledSwitch } from '../../components/switch/switch';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Logo from '../../assets/images/logo.png';

interface IHeader {
    mode: () => void;
}

export default function Header({ mode } : IHeader) {
  return (
    <HeaderStyled>
        <GroupedBox>
            <img src={Logo} width={54}/>
            <Space size={2} height={0}/>
            <h6>E-trosa</h6>
        </GroupedBox>
        <Box>
            <StyledSwitch />
        </Box>
    </HeaderStyled>
  );
}
