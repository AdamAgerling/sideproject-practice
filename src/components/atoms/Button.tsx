import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled, {css} from "styled-components";



type ButtonProps = {
children?: ReactNode;
colorVariant?: 'primary' | 'secondary' | 'tretiary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps>`
cursor: pointer;
color: ${({theme}) => theme.colors.textPrimary};
background-color: ${({theme}) => theme.colors.primary};
border-radius: 5px;
padding: 5px 9px;
border-color: transparent;
&:disabled{
  background-color: ${({theme}) => theme.colors.disabled};
}
&:active {
  border: 2px solid ${({theme}) => theme.colors.secondary};
}

${({colorVariant}) => colorVariant === 'secondary' && css`
background-color: #5c0080;
color: ${({theme}) => theme.colors.textSecondary};
`
}
${({colorVariant}) => colorVariant === 'tretiary' && css`
background-color: transparent;
&:hover{
  background-color: ${({theme}) => theme.colors.primary};
}
`}

`


export const Button: FC<ButtonProps> =({children, colorVariant = 'primary', ...props}) => {
  return (
    <StyledButton {...props} colorVariant={colorVariant}>
      {children}
    </StyledButton>
  )
}
