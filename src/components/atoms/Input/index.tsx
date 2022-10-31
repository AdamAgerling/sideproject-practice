import {
  FC,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes
} from 'react';
import styled from 'styled-components';

type InputProps = {
  children?: ReactNode;
  label?: string;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Input: FC<InputProps> = ({ label }) => {
  return (
    <>
      {label && { label }}
      <StyledContainer></StyledContainer>
    </>
  );
};
