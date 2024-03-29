import styled from 'styled-components';
import { device } from '../../display/screensize';
import { Fade } from 'react-awesome-reveal'

export const PaddedBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 12px;
`

export const StyledDescription  = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.OnSurfaceVariant};
    font-size: 55%;
`

export const CenterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`

export const FadeComponent = ( {children} : any ) => {
    return (
      <>
        <Fade cascade direction='up'>
            {children}
          </Fade>
      </>
    );
  };
