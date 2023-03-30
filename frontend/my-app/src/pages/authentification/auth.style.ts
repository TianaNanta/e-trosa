import styled from "styled-components";
import tw from "tailwind-styled-components";
import back from "../../assets/images/back.gif";
import { device } from "../../display/screensize";

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;

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
`;

export const FormDiv = tw(ColumnBox)`
  rounded-lg px-6 py-10 ring-1 ring-slate-900/5 shadow-md
${(props) => (props.$dark ? "bg-slate-800" : "white")}
`;

export const RowBox = styled(ColumnBox)`
  flex-direction: row;
`;

export const BackgroundLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;

export const StyledSpan = tw.label`
  block text-sm font-semibold leading-6 text-gray-900
`;

export const Divinput = tw.div`
  mt-2.5
`;
export const Gridinput = tw.div`
  grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2
`;
export const FullWidth = tw.div`
  sm:col-span-2
`;
