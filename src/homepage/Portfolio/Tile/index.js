import {
    Description,
    Header,
    Container,
    DetailsWrapper,
    Link,
} from "./styled";

export const Tile = ({ description, url, gitUrl, name }) => {
    return (
        <>
            <Container >
                <Header>{name && name}</Header>
                <Description>
                    {description && description}
                </Description>
                <DetailsWrapper>
                    {url &&
                        <Link href={url && `https://pecet3.github.io/${name}`} target="_blank">
                            Go to the demo
                        </Link>}
                    {gitUrl &&
                        <Link href={gitUrl} target="_blank">
                            See Repository
                        </Link>}
                </DetailsWrapper>
            </Container>
        </>
    )
};