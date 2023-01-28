import {
    Description,
    Header,
    Wrapper,
    DetailsWrapper,
    Link,
} from "./styled";

export const Tile = ({ description, url, gitUrl, name }) => {
    return (
        <>
            <Wrapper title={`repository name: ${name}`}>
                <Header>{name && name}</Header>
                <Description>
                    {description && description}
                </Description>
                <DetailsWrapper>
                    {url &&
                        <Link
                            href={url && `https://pecet3.github.io/${name}`}
                            target="_blank"
                            rel="noreferrer">
                            Go to the demo
                        </Link>}
                    {gitUrl &&
                        <Link
                            href={gitUrl}
                            rel="noreferrer"
                            target="_blank">
                            See Repository
                        </Link>}
                </DetailsWrapper>
            </Wrapper>
        </>
    )
};