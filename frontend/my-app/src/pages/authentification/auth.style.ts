import styled from 'styled-components';
import back from '../../assets/images/back.gif';
import { device } from '../../display/screensize';

export const CenterLogin = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2%;
    background: rgba(255,255,255,0.2);
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.225);

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

export const BackgroundLogin = styled.div`
    display: grid;
    place-items: center;
    background-image: url(${back});
    height: 100vh;
    width: 100vw;
`
