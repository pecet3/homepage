import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../common/mediaIcons/github.svg";

export const Icon = styled(GitHubIcon)`
    fill: ${({ theme }) => theme.elementColors.icon};
    margin-bottom: 12px;
`;
export const Header = styled.h2`
    color: ${({theme }) => theme.elementColors.textImportant};
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.05em;
    margin: 0 0 8px 0;
`;

export const Description = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 0 0 24px 0;
`;

export const TileContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    
    @media (max-width:${({theme})=>theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;