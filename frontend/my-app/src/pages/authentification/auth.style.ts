import styled from 'styled-components';
import back from '../../assets/images/back.gif';
import { device } from '../../display/screensize';

export const ColumnBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media ${device.MobileS} {
        width: 90%;
    }
    @media ${device.MobileM} {
        width: 80%;
    }
    @media ${device.MobileL} {
        width: 70%;
    }
    @media ${device.Tablet} {
        width: 70%;
    }
    @media ${device.Laptop} {
        width: 50%;
    }
    @media ${device.LaptopL} {
        width: 40%;
    }
    @media ${device.Desktop} {
        width: 40%;
    }
`

export const RowBox = styled(ColumnBox)`
    flex-direction: row;

`

export const BackgroundLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;


`
