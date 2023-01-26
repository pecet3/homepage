import { useSelector } from "react-redux";
import { Tile } from "./Tile";
import { Error } from "./Error";
import { nanoid } from "nanoid";
import {
    selectRepos,
    selectReposLength,
    selectReposStatus,
    selectUser,
    selectUserStatus
} from "../../common/github/githubSlice";
import {
    Description,
    Header,
    Icon,
    Link,
    TilesWrapper
} from "./styled";
import { Loading } from "./Loading";
import { AdditionalTile } from "./AdditionalTile";
import { github } from "../../common/personalInfo";


export const Portfolio = () => {
    const reposStatus = useSelector(selectReposStatus);
    const repos = useSelector(selectRepos);
    const reposLength = useSelector(selectReposLength);

    const user = useSelector(selectUser);
    const userStatus = useSelector(selectUserStatus);
    return (
        <>
            <Link href={github} target="_blank"><Icon /></Link>
            <Header>Portfolio</Header>
            <Description>My recent project</Description>

            <TilesWrapper notSuccess={reposStatus !== "success" ? true : false}>
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
                {reposLength % 2 === 1 &&
                    userStatus === "error"
                    ? <Tile />
                    : userStatus === "loading"
                        ? <p />
                        : <AdditionalTile
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