import styled from "styled-components";
import { borderRadius, boxShadow } from "../propsCSS";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.elementColors.tileBackground};
    color: ${({ theme }) => theme.elementColors.text};
    padding: 56px;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 0 0 24px 0;
    box-shadow: ${boxShadow};
    border: 6px solid ${({ theme }) => theme.elementColors.line};
    border-radius: ${borderRadius};
`;

export const Header = styled.h3`
    color: ${({ theme }) => theme.elementColors.portfolioHeader};
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
`;

export const Description = styled.p`
`;

export const Details = styled.p`
    margin-top: 8px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.scienceBlue};

    &:visited{
        color: ${({ theme }) => theme.colors.scienceBlue};
    }
`;