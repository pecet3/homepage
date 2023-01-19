import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: left;
    width: 60%;
    margin: 120px 0 0 0;
    
`;

export const Title = styled.p`
    margin: 20px 0 0 0;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.elementColors.text};
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.elementColors.textImportant};
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
`;

export const Content = styled.p`
    color: ${({ theme }) => theme.elementColors.textImportant};
    margin: 24px 0 0 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
`;


export const IconsContainer = styled.div`
    display: flex;
    gap: 24px;
    margin: 56px 0 110px 0;
`;

export const Link = styled.a`

`;

export const Icon = styled.img`
    width: 48px;
    height: 48px;
`;