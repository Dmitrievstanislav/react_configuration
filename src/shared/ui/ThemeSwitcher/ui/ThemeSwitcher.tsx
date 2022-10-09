import { Theme, useTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme_light.svg";
import DarkIcon from "shared/assets/icons/theme_dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/ui/Button";




interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toogleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toogleTheme}
        >
            {theme === Theme.DARK 
            ? <DarkIcon /> 
            : <LightIcon />
            }
        </Button>
    )
}

