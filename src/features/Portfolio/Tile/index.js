import { Description, Header, Container, Details, Link, Wrapper } from "./styled";

export const Tile = ({ description, url, gitUrl, name }) => {
    return (
        <>
            <Container>
                <Header>{name && name}</Header>
                <Description>
                    {description && description}
                </Description>
                <Details>
                    <Link href={url && url}>Go to the demo</Link>
                </Details>
                <Details>
                    <Link href={gitUrl && gitUrl}>See Repository</Link>
                </Details>
            </Container>
        </>
    )
};