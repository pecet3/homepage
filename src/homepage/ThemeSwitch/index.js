import {
    Wrapper,
    DarkModeInfo,
    Switch,
    SwitchElement,
} from "./styled.js";
import switchBright from "./images/switchBright.svg";
import switchDark from "./images/switchDark.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectIsDarkTheme, toggleIsDarkTheme } from "../../common/theme/themeSlice.js";

export const ThemeSwith = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);
    return (
        <Wrapper as="button"
            onClick={() => dispatch(toggleIsDarkTheme())}
            title="change a theme">
            <DarkModeInfo>
                Dark Mode {isDarkTheme ? "On" : "Off"}
            </DarkModeInfo>
            <Switch
                isDarkTheme={isDarkTheme}>
                <SwitchElement src={
                    isDarkTheme
                        ? switchDark
                        : switchBright
                }
                    alt="Change Theme"
                    moveRight={isDarkTheme}>
                </SwitchElement>
            </Switch>
        </Wrapper>
    )
};