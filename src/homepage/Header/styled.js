import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 72px;
    display: grid;
    grid-template-columns: auto auto auto;

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        grid-template-columns: auto auto;
        margin-bottom: 0px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        grid-template-columns: auto auto;
        margin-bottom: 0px;
    }
`;

export const Photo = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        width: 133px;
        height: 133px;
        margin-bottom: 13px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        margin-bottom: 13px;
    }

    ${({ darkTheme }) => darkTheme && css`
        filter: brightness(85%);
    `};
`;

export const TextContainer = styled.div`
    margin-left: 66px;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.05em;
    

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        grid-column-start: 1;
        grid-column-end: span 2;
        margin-left: 0;
    }
    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        grid-column-start: 1;
        grid-column-end: span 2;
        margin-left: 0;
    }
`;

export const ThisIs = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme.elementColors.text};
    text-transform: uppercase;
    margin: 0 0 12px 0 ;
`;

export const MyName = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    margin: 0 0 36px 0 ;
    color: ${({ theme }) => theme.elementColors.textImportant};

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 22px;
        margin: 0 0 16px 0 ;
    }
`;

export const About = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    margin: 0 0 32px 0 ;
    color: ${({ theme }) => theme.elementColors.text};

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 17px;
        margin: 0 0 24px 0 ;
    }
`;

export const HireMe = styled.a`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    width: 154px;
    height: 49px;
    padding: 12px;
    letter-spacing: 0.05em;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    border-radius: 4px;
    outline: 1px solid ${({ theme }) => theme.colors.scienceBlue + 130};
    text-decoration: none;
    padding: 12px 16px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-bottom: 0px;
    transition: .3s;

    &:hover{
        transform: scale(1.04);
        filter: brightness(105%);
    }
`;

export const HireMeIcon = styled.img``;

