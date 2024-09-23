import styled, { keyframes, css } from "styled-components";

const blinkLoading = keyframes`
  0% {
    background-color: rgba(255,255,255,0.65);
  }
  100% {
    background-color: rgba(255,255,255,0.8);
  }
`;

const blinkAnimation = css`
  ${blinkLoading} 0.44s infinite alternate both;
`

export const Card = styled.div<{ $isLoading?: boolean}>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 4px solid #fff;
  margin: 16px;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  h3,
  p {
    margin: 0;
  }
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  &::before {
    content: "";
    visibility: ${props => props.$isLoading ? "visible" : "hidden"};
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: ${blinkAnimation};
    transition: .2s ease;
  }
`;

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  svg {
    cursor: pointer;
  }
`;
