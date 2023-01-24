import styled, { css } from "styled-components";
import {
    Description,
    Header,
    Container,
    DetailsWrapper,
    Link,
} from "../Tile/styled";

export const StyledContainer = styled(Container)`
    padding: 24px 24px 56px 56px;

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        padding: 24px;   
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        display: none;   
    }

    ${({ notSuccess }) => notSuccess && css`
        display: none;
    `}
`;

export const StyledHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledDescription = styled(Description)`

`;

export const StyledDetailsWrapper = styled(DetailsWrapper)`

`;

export const StyledLink = styled(Link)`

`;

export const Avatar = styled.img`
    border: 1px solid;
    border-radius: 50%;
    width: 120px;
    height: 120px;
`;

export const Login = styled.p`
    color: ${({ theme }) => theme.elementColors.text};
    font-weight: 400px;
    font-size: 20px;
    margin: 0;
`;