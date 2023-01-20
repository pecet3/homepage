import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: 'Inter', sans-serif;
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
export const HomepageWrapper = styled.div`
    max-width: 1216px;
    padding: 0 8px;
    transition: .5s; 
    margin: 0 auto;
    text-align: center;

`;