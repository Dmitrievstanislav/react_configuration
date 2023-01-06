import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import cls from './Header.module.scss';


interface HeaderProps {
    className?: string,
}

export const Header = ({className}: HeaderProps) => {
  const {t} = useTranslation();
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <nav className={cls.links}>
      </nav>
    </header>
  );
};

