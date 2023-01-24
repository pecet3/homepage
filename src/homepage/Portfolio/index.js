import { useSelector } from "react-redux";
import { Error } from "./Error";
import { selectRepos, selectReposLength, selectReposStatus, selectUser, selectUserStatus } from "../../common/github/githubSlice";
import { Tile } from "./Tile";
import { Description, Header, Icon, TilesWrapper } from "./styled";
import { Loading } from "./Loading";
import { nanoid } from "nanoid";
import { AdditionalTile } from "./AdditionalTile";
export const Portfolio = () => {
    const reposStatus = useSelector(selectReposStatus);
    const repos = useSelector(selectRepos);
    const reposLength = useSelector(selectReposLength);

    const user = useSelector(selectUser);
    const userStatus = useSelector(selectUserStatus);
    return (
        <>
            <Icon />
            <Header>Portfolio</Header>
            <Description>My recent project</Description>

            <TilesWrapper notSuccess={reposStatus === "success" ? false : true}>
                {
                    reposStatus === "error"
                        ? <Error />
                        : reposStatus === "loading"
                            ? <Loading />
                            : repos.map((repo) =>
                                <Tile as="li"
                                    key={nanoid()}
                                    url={repo.html_url}
                                    description={repo.description}
                                    gitUrl={repo.html_url}
                                    name={repo.name}
                                />)
                }
                {userStatus === "success" & reposLength % 2 === 1 &&
                    <AdditionalTile
                        login={user.login}
                        avatar={user.avatar_url}
                        bio={user.bio}
                        location={user.location}
                        followers={user.followers}
                        name={user.name}
                        following={user.following}
                    />}
            </TilesWrapper>

        </>
    )
};