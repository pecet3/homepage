
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "./common/theme/theme";
import { selectIsDarkTheme } from "./common/theme/themeSlice";
import { GlobalStyle } from "./GlobalStyle";
import Homepage from "./homepage";
import { Wrapper } from "./styled";
import { useEffect } from "react";
import { fetchRepos, fetchUser } from "./common/github/githubSlice";


function App() {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    useEffect(() => {
        dispatch(fetchRepos());
        dispatch(fetchUser());
    }, [dispatch])

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
            <GlobalStyle />
            <Wrapper>
                <Homepage />
            </Wrapper>
        </ThemeProvider>
    )
};

export default App;