import styled from "styled-components";

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.elementColors.text};
    background-color: ${({ theme }) => theme.elementColors.background};
    padding-top: 120px;
    padding-bottom: 110px;
    transition: .5s;
    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        padding-top: 32px;
        padding-bottom: 30px;
    }   
`;
