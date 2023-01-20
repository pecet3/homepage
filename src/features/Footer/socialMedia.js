import { discord, facebook, github } from "../../common/personalInfo";
import { ReactComponent as githubIcon } from "../../common/mediaIcons/github.svg";
import { ReactComponent as discordIcon } from "../../common/mediaIcons/discord.svg";
import { ReactComponent as facebookIcon } from "../../common/mediaIcons/facebook.svg";
import { StyledIcon } from "./styled";

export const socialMedia = [
    {
        name: "github",
        link: { github },
        Icon: StyledIcon(githubIcon),
    },
    {
        name: "facebook",
        link: { facebook },
        Icon: StyledIcon(facebookIcon),
    },
    {
        name: "discord",
        link: { discord },
        Icon: StyledIcon(discordIcon),
    }
];