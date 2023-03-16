import React from 'react';
import { HeaderStyled } from './header.style';
import { Box } from '@mui/material';
import { StyledSwitch } from '../../components/switch/switch';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

interface IHeader {
    mode: () => void;
}

export default function Header({ mode } : IHeader) {
  return (
    <HeaderStyled>
        <Box>
            <h2>E-trosa</h2>
        </Box>
        <Box>
            <AccountBalanceIcon />
        </Box>
        <Box>
            <StyledSwitch />
        </Box>
    </HeaderStyled>
  );
}
