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

export const AdditionalTile = ({ login, name, avatar, location, bio, followers, following }) => {
    return (
        <StyledLink href={github} target="_blank">
            <StyledContainer>
                <StyledHeader>
                    <div>
                        {name && name}
                        <Login>{login && login}</Login>
                    </div>
                    <Avatar src={avatar && avatar} alt="avatar on github" />
                </StyledHeader>
                <StyledDescription>
                    {bio && bio}
                </StyledDescription>
                <StyledDetailsWrapper>
                    <StyledLink as="p">📌 {location && location}</StyledLink>
                    <StyledLink as="p">🧙‍♂️ {followers && followers} followers, {following && following} following</StyledLink>
                </StyledDetailsWrapper>
            </StyledContainer>
        </StyledLink>
    )
};