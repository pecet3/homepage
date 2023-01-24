import { email } from "../../common/personalInfo";
import { socialMedia } from "./socialMedia";
import { Title, Wrapper, Content, IconsContainer, Link, Header } from "./styled";
export const Footer = () => {
    return (
        <>
            <Wrapper>
                <Title>Let`s Talk</Title>
                <Header><Link href={`mailto:${email}`} title={email}>{email}</Link></Header>
                <Content>
                    Lorem ipsum dolor sit amet. Sit nemo voluptatum qui nihil
                    error aut voluptatum placeat qui dolorem voluptas
                    ea voluptates minima et velit itaque qui dolores quae.
                </Content>
                <IconsContainer>
                    {socialMedia.map(({ name, Icon, link }) =>
                        <Link
                            key={name}
                            href={link} target="_blank">
                            <Icon />
                        </Link>
                    )}
                </IconsContainer>
            </Wrapper>
        </>
    )
};