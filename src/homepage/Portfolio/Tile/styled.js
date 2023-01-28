import styled, { css } from "styled-components";

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
    
    box-shadow: ${({ theme }) => theme.props.boxShadow};
    border: 6px solid ${({ theme }) => theme.elementColors.line};
    border-radius: ${({ theme }) => theme.props.borderRadius};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition: border-color .4s;

    ${({ empty }) => empty && css`
        @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
            display: none;
        }
    `}

    &:hover{
        border-color: ${({ theme }) => theme.colors.scienceBlue + 70};
    }
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 14px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
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
    justify-self: flex-end;

`;

export const DetailsWrapper = styled.div`
    margin: 5px 0;
    justify-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.dodgerBlue};
    font-weight: 600;
    &:visited{
        color: ${({ theme }) => theme.colors.dodgerBlue};
    }
`;
