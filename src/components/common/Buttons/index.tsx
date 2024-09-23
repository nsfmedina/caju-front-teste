import styled from "styled-components";
import { ButtonType } from "~/types/common/button";

const Button = styled.button<{ $type?: ButtonType}>`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  background-color: ${props => {
    switch (props.$type) {
      case 'success':
        return `#64a98c`;
      case 'error':
        return '#b5342d';
      default:
        return '#64a98c';
    }
  }};
  cursor: pointer;
  height: 56px;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonSmall = styled.button<{
  bgcolor?: string;
  color?: string;
}>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${(props) => props.bgcolor ?? 'none'};
  color: ${(props) => props.color ?? "#000"};
  cursor: pointer;
`;


export default Button;
