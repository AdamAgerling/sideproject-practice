import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled from "styled-components";


type ButtonProps = {
children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps>`
cursor: pointer;
color: ${({theme}) => theme.colors.textPrimary};
background-color: ${({theme}) => theme.colors.primary};
border-radius: 5px;
padding: 5px 9px;
border: none;
&:disabled{
  background-color: ${({theme}) => theme.colors.disabled};
}
`


export const Button: FC<ButtonProps> =({children, ...props}) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}
