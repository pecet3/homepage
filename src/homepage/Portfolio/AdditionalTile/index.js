import { github } from "../../../common/personalInfo";
import {
    StyledContainer,
    StyledHeader,
    Avatar,
    StyledDescription,
    StyledDetailsWrapper,
    StyledLink,
    Login
} from "./styled";

export const AdditionalTile = ({
    login,
    name,
    avatar,
    location,
    bio,
    followers,
    following }) => {
    return (
        <StyledLink
            href={github}
            title="Link to my Github profile"
            target="_blank">
            <StyledContainer>
                <StyledHeader>
                    <div>
                        {name && name}
                        <Login>{login && login}</Login>
                    </div>
                    {avatar && <Avatar src={avatar} alt="avatar on github" />}
                </StyledHeader>
                <StyledDescription>
                    {bio && bio}
                </StyledDescription>
                <StyledDetailsWrapper>
                    {location &&
                        <StyledLink as="p">
                            📌 {location}
                        </StyledLink>}
                    {followers &&
                        <StyledLink as="p">
                            🧙‍♂️ {followers} followers, {following && following} following
                        </StyledLink>}
                </StyledDetailsWrapper>
            </StyledContainer>
        </StyledLink>
    )
};