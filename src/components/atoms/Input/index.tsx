import { FC,  InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import styled, {css} from "styled-components";



type InputProps = {
children?: ReactNode;
label?: string;
} & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>);


const StyledContainer = styled.div`

`



export const Input: FC<InputProps> =({ label }) => {
  return (
    <>
   { label && {label}}
    <StyledContainer >

    </StyledContainer>
  </>
  )
}
