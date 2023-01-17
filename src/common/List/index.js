import { skillset, nextToLearn } from "./content";
import { Wrapper, Title, TitleIcon, Ul, Li, Dot } from "./styled";


export const List = ({ title, isSkillset }) => {
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
                        ? skillset.map(element => <Li key={element}><Dot>•</Dot>{element}</Li>)
                        : nextToLearn.map(element => <Li key={element}><Dot>•</Dot>{element}</Li>)}
                </Ul>
            </Wrapper>
        </>
    )
};