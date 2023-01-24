import spinner from "./spinner.svg";
import { Wrapper, Info, Spinner } from "./styled";
export const Loading = () => {
    return (
        <>
            <Wrapper>
                <Info>
                    Please wait, projects are being loaded...
                </Info>
                <Spinner src={spinner} alt="spinner"></Spinner>
            </Wrapper>
        </>
    );
};