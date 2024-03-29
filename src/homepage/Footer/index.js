import { email } from "../../common/personalInfo";
import { socialMedia } from "./socialMedia";
import {
    Title,
    Wrapper,
    Content,
    IconsContainer,
    Link,
    Header,
} from "./styled";
export const Footer = () => {
    return (
        <>
            <Wrapper as="footer">
                <Header>
                    <Title>Let`s Talk</Title>
                    <Link
                        href={`mailto:${email}`}
                        title={email}
                        rel="noreferrer">
                        {email}
                    </Link>
                </Header>
                <Content>
                    I’m always open to new projects whenever I have the time.
                    If you have a website, dashboard or mobile app in mind and need some help
                    to make your ideas come to life, feel free to contact me.
                </Content>
                <IconsContainer>
                    {socialMedia.map(({ name, Icon, link }) =>
                        <Link
                            key={name}
                            href={link}
                            title={name}
                            rel="noreferrer"
                            target="_blank">
                            <Icon />
                        </Link>
                    )}
                </IconsContainer>
            </Wrapper>
        </>
    )
};