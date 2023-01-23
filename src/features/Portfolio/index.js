import { useSelector } from "react-redux";
import { Error } from "./Error";
import { selectRepos, selectStatus } from "../../common/github/githubSlice";
import { Tile } from "./Tile";
import { Description, Header, Icon, TilesWrapper } from "./styled";
import { Loading } from "./Loading";
import { nanoid } from "nanoid";
export const Portfolio = () => {
    const status = useSelector(selectStatus);
    const repos = useSelector(selectRepos);
    return (
        <>
            <Icon />
            <Header>Portfolio</Header>
            <Description>My recent project</Description>

            <TilesWrapper notSuccess={status === "success" ? false : true}>
                {
                    status === "loading"
                        ? <Loading />

                        : status === "success"
                            ? repos.map((repo) =>
                                <Tile as="li"
                                    key={nanoid()}
                                    url={repo.html_url}
                                    description={repo.description}
                                    gitUrl={repo.html_url}
                                    name={repo.name}
                                />)

                            : <Error />
                }
            </TilesWrapper>

        </>
    )
};