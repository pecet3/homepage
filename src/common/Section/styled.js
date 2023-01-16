import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 119px;
    margin-bottom: 72px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: ${({ theme }) => theme.colors.white}; 
    border-radius: 4px;
    padding: 32px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const Title = styled.h2`
    text-align: left;
    margin: 0;
    padding-bottom: 15px;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mineShaft + 30};
`;