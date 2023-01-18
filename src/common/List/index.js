import { skillset, nextToLearn } from "./content";
import { Wrapper, Title, TitleIcon, Ul, Li, Dot } from "./styled";


export const List = ({ title, isSkillset }) => {
    const getListElement = element => <Li key={element}><Dot>•</Dot>{element}</Li>
    return (
        <>
            <Wrapper>
                <Title>{title}
                    <TitleIcon>
                        {isSkillset
                            ? "🛠️"
                            : "🚀"}
                    </TitleIcon>
                </Title>
                <Ul>
                    {isSkillset
                        ? skillset.map(getListElement)
                        : nextToLearn.map(getListElement)}
                </Ul>
            </Wrapper>
        </>
    )
};