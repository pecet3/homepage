import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 95px;
    letter-spacing: 0.05em;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`;

export const Icon = styled.img`
    
`;

export const Header = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.elementColors.textImportant};
`;

export const Content = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: ${({ theme }) => theme.elementColors.text};
`;

export const Button = styled.a`
    margin-top: 32px;
    width: 168px;
    height: 49px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
    background-color: ${({ theme }) => theme.elementColors.button};
    border-radius: ${({ theme }) => theme.props.borderRadius};
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;

    &:visited{
        color: ${({ theme }) => theme.colors.white};
    }
`;
