import {
    Wrapper,
    DarkModeInfo,
    Switch,
    SwitchElement,
} from "./styled.js";
import switchBright from "./images/switchBright.svg";
import switchDark from "./images/switchDark.svg";

export const ThemeSwith = () => {
    return (
        <Wrapper>
            <DarkModeInfo>Dark Mode Off</DarkModeInfo>
            <Switch>
                <SwitchElement src={switchBright} alt="Change Theme"></SwitchElement>
            </Switch>
        </Wrapper>
    )
};