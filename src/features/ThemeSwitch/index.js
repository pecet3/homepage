import {
    Wrapper,
    DarkModeInfo,
    Switch,
    SwitchElement,
} from "./styled.js";
import switchBright from "./images/switchBright.svg";
import switchDark from "./images/switchDark.svg";
import { useState } from "react";

export const ThemeSwith = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    return (
        <Wrapper>
            <DarkModeInfo>Dark Mode Off</DarkModeInfo>
            <Switch onClick={() => setIsDarkTheme(!isDarkTheme)} isDarkTheme={isDarkTheme}>
                <SwitchElement src={
                    isDarkTheme
                        ? switchDark
                        : switchBright
                } alt="Change Theme" isDarkTheme={isDarkTheme}></SwitchElement>
            </Switch>
        </Wrapper>
    )
};