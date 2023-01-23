
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "./common/theme/theme";
import { selectIsDarkTheme } from "./common/theme/themeSlice";
import { GlobalStyle } from "./GlobalStyle";
import Homepage from "./features/Homepage";
import { Wrapper } from "./styled";
import { useEffect } from "react";
import { fetchRepos } from "./common/github/githubSlice";


function App() {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    useEffect(() => {
        dispatch(fetchRepos());
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