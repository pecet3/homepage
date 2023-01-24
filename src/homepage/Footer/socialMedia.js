import { ReactComponent as githubIcon } from "../../common/mediaIcons/github.svg";
import { ReactComponent as discordIcon } from "../../common/mediaIcons/discord.svg";
import { ReactComponent as facebookIcon } from "../../common/mediaIcons/facebook.svg";
import { StyledIcon } from "./styled";

export const socialMedia = [
    {
        name: "github",
        link: "https://github.com/pecet3",
        Icon: StyledIcon(githubIcon),
    },
    {
        name: "facebook",
        link: "https://www.facebook.com/jakub.pacewicz.9",
        Icon: StyledIcon(facebookIcon),
    },
    {
        name: "discord",
        link: "https://discordapp.com/users/pecet#3630",
        Icon: StyledIcon(discordIcon),
    }
];