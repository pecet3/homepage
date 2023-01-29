import { Wrapper, Title, TitleIcon, Ul, Li, Dot } from "./styled";


export const List = ({ title, icon, list }) => {
    const getListElement = element => <Li key={element}><Dot>•</Dot>{element}</Li>
    return (
        <>
            <Wrapper as="section">
                <Title>{title}
                    <TitleIcon>
                        {icon}
                    </TitleIcon>
                </Title>
                <Ul>
                    {list.map(getListElement)}
                </Ul>
            </Wrapper>
        </>
    )
};