import styled from "styled-components";
import { GeneralUINotificationTypes } from "~/types/common/general-ui";

export const NotificationCardWrapper = styled.div<{$type: GeneralUINotificationTypes}>`
  position: fixed;
  z-index: 99;
  bottom: 16px;
  right: 16px;
  width: 100%;
  max-width: 240px;
  padding: 12px;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: ${props => {
    switch (props.$type) {
      case 'success':
        return `#006400`;
      case 'error':
        return '#B22222';
      default:
        return '#006400';
    }
  }};
  text-shadow: 1px 1px 1px rgba(0,0,0,.25);

  svg {
    font-size: 5vw;
    margin-right: 12px;
  }
`;

export const NotificationCardTitle = styled.span`
  font-size: 16px;
  line-height: 1.4;
  margin: 0 0 .8em;
  display: block;
`

export const notificationCardDescription = styled.p`
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
`;