import { email } from "../../common/personalInfo"
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
import { ThemeSwith } from "../ThemeSwitch";
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
                        I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.
                    </About>
                    <HireMe href={`mailto:${email}`} title={email}>
                        <HireMeIcon src={hireMeIcon} alt="send me e-mail" />
                        Hire me
                    </HireMe>
                </TextContainer>
            </Wrapper>
        </>
    )
};