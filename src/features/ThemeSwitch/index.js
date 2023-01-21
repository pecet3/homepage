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
        <Wrapper>
            <DarkModeInfo>Dark Mode {isDarkTheme ? "On" : "Off"}</DarkModeInfo>
            <Switch onClick={() => dispatch(toggleIsDarkTheme())} isDarkTheme={isDarkTheme}>
                <SwitchElement src={
                    isDarkTheme
                        ? switchDark
                        : switchBright
                } alt="Change Theme" isDarkTheme={isDarkTheme}></SwitchElement>
            </Switch>
        </Wrapper>
    )
};