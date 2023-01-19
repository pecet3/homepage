import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 12px;
    align-self: flex-start;
    align-items: center;
    order: 2;

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        order: 0;
        justify-self: flex-end;
    }
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        order: 0;
        justify-self: flex-end;
    }

`;

export const DarkModeInfo = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme.elementColors.text};
    padding: 5px 0;
    text-transform: uppercase;
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        display:none;
    }
`;

export const Switch = styled.div`
    width: 48px;
    height: 25px;
    border-radius: 25%/50%;
    background-color: ${({ theme }) => theme.elementColors.switchBackground};
    border: 1px solid ${({ theme }) => theme.elementColors.switch};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2px;
    
    &:hover{
        cursor: pointer;
    }

    ${({ isDarkTheme }) => isDarkTheme && css`

        @media (max-width:${({ theme }) => theme.breakpoints.large}px){
            justify-content: flex-end;
        }
    `};
    
`;

export const SwitchElement = styled.img`
    background-color: ${({ theme }) => theme.elementColors.switch};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    padding: 3px;
    transition: .5s;

    ${({ isDarkTheme }) => isDarkTheme && css`
        transform: translate(22px);

        @media (max-width:${({ theme }) => theme.breakpoints.large}px){
            transform: translate(0px);
        }
    `};
`;