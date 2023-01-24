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
                <StyledLink>📌 {location && location}</StyledLink>
                <StyledLink>🧙‍♂️ {followers && followers} followers, {following && following} following</StyledLink>
            </StyledDetailsWrapper>
        </StyledContainer>
    )
};