import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Header.module.scss"


interface HeaderProps {
    className?: string,
}

export const Header = ({className}: HeaderProps) => {
    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <ThemeSwitcher />
            <nav className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink}to={"/"}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О нас</AppLink>
            </nav>
        </header>
    )
}

