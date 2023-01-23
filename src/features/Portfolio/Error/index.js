import { Button, Content, Header, Icon, Wrapper, Link } from "./styled";
import errorBright from "./errorBright.svg";
import errorDark from "./errorDark.svg"
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../../common/theme/themeSlice";
import { github } from "../../../common/personalInfo";

export const Error = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    return (
        <Wrapper>
            <Icon src={isDarkTheme ? errorDark : errorBright} alt="" />
            <Header>Ooops! Something went wrong... </Header>
            <Content>
                Sorry, failed to load Github projects. You<br /> can
                check them directly on Github.
            </Content>
            <Button><Link href={github} target="_blank">Go to Github</Link></Button>
        </Wrapper>
    );
};