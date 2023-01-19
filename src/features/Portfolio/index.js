import { Tile } from "../../common/Tile";
import { Description, Header, Icon, TileContainer } from "./styled";

export const Portfolio = () => {

    return (
        <>
            <Icon />
            <Header>Portfolio</Header>
            <Description>My recent project</Description>
            <TileContainer>
                <Tile />
            </TileContainer>
        </>
    )
};