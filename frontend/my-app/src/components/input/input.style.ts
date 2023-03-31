import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { Box }  from "@mui/material";


export const StyledInput = tw.input`
${(props) => (Boolean(props.color) ? "bg-slate-700 text-gray-300" : "bg-white text-slate-900")}
block w-full rounded-md border-0 px-3.5 py-2 
shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
`

