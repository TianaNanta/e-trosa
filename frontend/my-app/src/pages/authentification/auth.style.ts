import styled from 'styled-components';
import back from '../../assets/images/back.gif';
import { device } from '../../display/screensize';

export const CenterLogin = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2%;
    background-color: ${props => props.theme.colors.surfaceVariant};
    border-radius: 10px;

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
    /* background-image: url(${back}); */
    height: 100vh;
    width: 100vw;
    background: #40c9ff;
    background: -webkit-linear-gradient(81deg, #40c9ff 0%, #e81cff 100%);
    background: linear-gradient(81deg, #40c9ff 0%, #e81cff 100%);


`
