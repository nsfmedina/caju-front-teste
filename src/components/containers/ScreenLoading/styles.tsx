import styled, { css, keyframes } from "styled-components";

const spinningLoading = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  50%, 100% {
    transform: rotateZ(90deg);
  }
`
const spinningAnimation = css`
  ${spinningLoading} 1s ease-in-out .4s infinite both;
`

export const ScreenLoadingWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255,255,255,.5);
  transition: .44s ease-in-out;
`;

export const ScreenLoadingMessage = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const ScreenLoadingText = styled.span`
  font-size: 22px;
  line-height: .8;
  margin-left: 12px;
  font-weight: 600;
`;

export const ScreenLoadingIcon = styled.div`
  animation: ${spinningAnimation};

  svg {
    display: block;
  }
`
