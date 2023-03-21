import styled from 'styled-components';

export const BoxStyled = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);   
    transform: rotate(45deg);
    background-color: ${props => props.theme.colors.background};


    @keyframes square-animation {
    0% {
    left: 0;
    top: 0;
    }

    10.5% {
    left: 0;
    top: 0;
    }

    12.5% {
    left: 32px;
    top: 0;
    }

    23% {
    left: 32px;
    top: 0;
    }

    25% {
    left: 64px;
    top: 0;
    }

    35.5% {
    left: 64px;
    top: 0;
    }

    37.5% {
    left: 64px;
    top: 32px;
    }

    48% {
    left: 64px;
    top: 32px;
    }

    50% {
    left: 32px;
    top: 32px;
    }

    60.5% {
    left: 32px;
    top: 32px;
    }

    62.5% {
    left: 32px;
    top: 64px;
    }

    73% {
    left: 32px;
    top: 64px;
    }

    75% {
    left: 0;
    top: 64px;
    }

    85.5% {
    left: 0;
    top: 64px;
    }

    87.5% {
    left: 0;
    top: 32px;
    }

    98% {
    left: 0;
    top: 32px;
    }

    100% {
    left: 0;
    top: 0;
    }
}
`
export const BoxStyledChild = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
    margin: 2px;
    border-radius: 0px;
    background: ${props => props.theme.colors.OnBackground};
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    animation: square-animation 10s ease-in-out infinite both;
    

    :nth-of-type(0) {
    animation-delay: 0s;
    }

    :nth-of-type(1) {
    animation-delay: -1.4285714286s;
    }

    :nth-of-type(2) {
    animation-delay: -2.8571428571s;
    }

    :nth-of-type(3) {
    animation-delay: -4.2857142857s;
    }

    :nth-of-type(4) {
    animation-delay: -5.7142857143s;
    }

    :nth-of-type(5) {
    animation-delay: -7.1428571429s;
    }

    :nth-of-type(6) {
    animation-delay: -8.5714285714s;
    }

    :nth-of-type(7) {
    animation-delay: -10s;
    }
`