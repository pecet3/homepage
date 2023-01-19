import { discord, email, facebook, github } from "../../common/personalInfo";
import githubIcon from "../../common/mediaIcons/github.svg";
import discordIcon from "../../common/mediaIcons/discord.png";
import facebookIcon from "../../common/mediaIcons/facebook.svg";
import { Title, Wrapper, Content, IconsContainer, Link, Icon, Header } from "./styled";
export const Footer = () => {
    return (
        <>
            <Wrapper>
                <Title>Let`s Talk</Title>
                <Header>{email}</Header>
                <Content>
                    Lorem ipsum dolor sit amet. Sit nemo voluptatum qui nihil
                    error aut voluptatum placeat qui dolorem voluptas
                    ea voluptates minima et velit itaque qui dolores quae.
                </Content>
                <IconsContainer>
                    <Link href={github}><Icon src={githubIcon} alt="my github" /></Link>
                    <Link href={discord}><Icon src={discordIcon} alt="my discord" /></Link>
                    <Link href={facebook}><Icon src={facebookIcon} alt="my facebook" /></Link>
                </IconsContainer>
            </Wrapper>
        </>
    )
};