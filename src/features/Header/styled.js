import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 119px;
    margin-bottom: 63px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: auto 4fr auto;
`;

export const Photo = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;  
`;

export const TextContainer = styled.div`
    margin-left: 66px;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
`;

export const ThisIs = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.slateGray};
    text-transform: uppercase;
    margin: 0 0 12px 0 ;
`;

export const MyName = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    margin: 0 0 35px 0 ;
`;

export const About = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 0 0 32px 0 ;
    color: ${({ theme }) => theme.colors.slateGray};
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
    font-size: 20.0584px;
    line-height: 24px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.iron + 30};
    text-decoration: none;
    padding: 12px 16px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    
`;

export const HireMeIcon = styled.img``;

