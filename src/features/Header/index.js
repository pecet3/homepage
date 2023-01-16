import { email } from "../../personalInfo";
import HeaderPhoto from "./images/headerPhoto.jpg";
import hireMeIcon from "./images/hireMeIcon.svg";
import {
    About,
    MyName,
    Photo,
    TextContainer,
    ThisIs,
    Wrapper,
    HireMe,
    HireMeIcon,
} from "./styled";
import { ThemeSwith } from "./ThemeSwitch";
export const Header = () => {
    return (
        <>
            <Wrapper>
                <Photo src={HeaderPhoto} alt="Moje zdjęcie" />
                <ThemeSwith />
                <TextContainer>
                    <ThisIs>This is</ThisIs>
                    <MyName>Jakub Pacewicz</MyName>
                    <About>
                        Lorem ipsum dolor sit amet. Sit nemo voluptatum qui nihil error
                        aut voluptatum placeat qui dolorem voluptas ea voluptates minima
                        et velit itaque qui dolores quae.
                    </About>
                    <HireMe href={`mailto:${email}`}>
                        <HireMeIcon src={hireMeIcon} alt="send me e-mail" />
                        Hire me
                    </HireMe>
                </TextContainer>
            </Wrapper>
        </>
    )
};