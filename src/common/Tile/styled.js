import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        gap: 16px;
    }
    
`;

export const Container = styled.div`
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
    box-shadow: ${({ theme }) => theme.props.boxShadow};
    border: 6px solid ${({ theme }) => theme.elementColors.line};
    border-radius: ${({ theme }) => theme.props.borderRadius};

    &:hover{
        border-color: ${({ theme }) => theme.colors.scienceBlue + 70};
    }
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 14px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        margin-bottom: 16px;
        padding: 24px;
    }
`;

export const Header = styled.h3`
    color: ${({ theme }) => theme.elementColors.portfolioHeader};
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 0;
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 16px;
    }
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