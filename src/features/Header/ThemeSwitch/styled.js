import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 12px;
    align-self: flex-end;
    align-items: center;
`;

export const DarkModeInfo = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.slateGray};
    padding: 5px 0;
    text-transform: uppercase;
`;

export const Switch = styled.div`
    width: 47px;
    height: 25px;
    border-radius: 25%/50%;
    background-color: ${({ theme }) => theme.colors.mercury};
    border: 1px solid ${({ theme }) => theme.colors.slateGray};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2px;
    
    &:hover{
        cursor: pointer;
    }
`;

export const SwitchElement = styled.img`
    background-color: ${({ theme }) => theme.colors.slateGray};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    padding: 3px;
`;