import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 82px 0 0 0;
    color: ${({ theme }) => theme.elementColors.textImporant};
`;

export const Info = styled.p`
    margin: 0 0 48px 0;
`;

export const Spinner = styled.img`
    margin: 0 0 140px 0;
    animation: spinner 1s linear infinite;

    @keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;
