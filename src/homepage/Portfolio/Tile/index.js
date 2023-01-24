import { Description, Header, Container, DetailsWrapper, Link, } from "./styled";

export const Tile = ({ description, url, gitUrl, name, empty }) => {
    return (
        <>
            <Container empty={empty ? true : false}>
                {!empty &&
                    <>
                        <Header>{name && name}</Header>
                        <Description>
                            {description && description}
                        </Description>
                        <DetailsWrapper>
                            <Link href={url && `https://pecet3.github.io/${name}`} target="_blank">
                                Go to the demo
                            </Link>
                            <Link href={gitUrl && gitUrl} target="_blank">
                                See Repository
                            </Link>
                        </DetailsWrapper>
                    </>
                }
            </Container>
        </>
    )
};