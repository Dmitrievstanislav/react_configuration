import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import cls from './Header.module.scss';


interface HeaderProps {
    className?: string,
}

export const Header = ({className}: HeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <nav className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}to={'/'}>Главная</AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/about'}>О нас</AppLink>
      </nav>
    </header>
  );
};

