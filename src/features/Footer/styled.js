import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: left;
    margin: 120px 0 0 0;

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        margin-top: 48px;
    }
`;

export const Title = styled.p`
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

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 18px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        margin-top: 12px;
    }
`;

export const Content = styled.p`
    color: ${({ theme }) => theme.elementColors.textImportant};
    margin: 24px 0 0 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    width: 60%;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 14px;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        margin-top: 12px;
        width: 100%;
    }
`;


export const IconsContainer = styled.div`
    display: flex;
    gap: 24px;
    margin: 56px 0 110px 0;

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        margin: 40px 0 30px 0;
    }
`;

export const Link = styled.a`
 &:hover{
        fill: ${({ theme }) => theme.colors.scienceBlue};
 }
`;

export const StyledIcon = (icon) => styled(icon)`  
    width: 48px;
    height: 48px;
    transition: fill .3s;
    
    &:hover{
        fill: ${({ theme }) => theme.colors.scienceBlue};
    }
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        width: 32px;
        height: 32px;
    }
`;