import styled from "styled-components";
import { borderRadius, boxShadow } from "../propsCSS";

export const Wrapper = styled.div`
    margin-top: 119px;
    margin-bottom: 72px;
    max-width: 1200px;
    background-color: ${({ theme }) => theme.elementColors.tileBackground}; 
    border-radius: ${borderRadius};
    padding: 32px;
    box-shadow: ${boxShadow};

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        padding: 16px;
        margin-top: 48px;
        margin-bottom: 50px;
    }
`;

export const Title = styled.h2`
    text-align: left;
    margin: 0;
    padding-bottom: 18px;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    border-bottom: 1px solid ${({ theme }) => theme.elementColors.line};
    grid-column-start: 1;
    grid-column-end: -1;
    display:flex;
    color: ${({ theme }) => theme.elementColors.textImportant};

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 18px;
    }
`;

export const TitleIcon = styled.a`
    align-self: center;
    font-size: 24px;
    padding-left: 16px;
`;

export const Ul = styled.ul`
    padding-left: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const Dot = styled.span`
    color: ${({ theme }) => theme.elementColors.dot};
    padding-right: 8px;
    font-size: 24px;
`;

export const Li = styled.li`
    color: ${({ theme }) => theme.elementColors.text};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    text-align: left;
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 14px;
    }
`;
