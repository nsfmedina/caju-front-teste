import styled from "styled-components";

export const ActionModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.7);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

export const ActionModalContainer = styled.div`
    max-width: 680px;
    width: 100%;
    padding: 32px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 8px;
    text-align: center;
`;

export const ActionModalTitle = styled.h3`
    font-size: 24px;
    line-height: 0.7;
    margin: 0 0 .6em;
`;

export const ActionModalDescription = styled.p`
    font-size: 16px;
    line-height: 1.2;
`;

export const ActionModalButtonGrouper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
`;