import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {Button, ButtonTheme} from 'shared/ui/Button';
import {LangSwitcher} from 'shared/ui/LangSwitcher';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import HomeIcon from 'shared/assets/icons/homeIcon.svg';
import ListIcon from 'shared/assets/icons/listIcon.svg';
import ArrowLeftIcon from 'shared/assets/icons/arrowLeftIcon.svg';
import ArrowRightIcon from 'shared/assets/icons/arrowRightIcon.svg';


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const {t} = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const onToogle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid='sidebar' className={
      classNames(
          cls.sidebar,
          {[cls.collapsed]: collapsed},
          [className],
      )}
    >
      <nav>
        <ul>
          <li>
            <AppLink
              className={cls.item}
              theme={AppLinkTheme.SECONDARY}
              to={'/'}
            >
              <HomeIcon className={cls.icon}/>
              <span className={cls.link}>
                {t('Главная')}
              </span>
            </AppLink>
          </li>
          <li>
            <AppLink
              className={cls.item}
              theme={AppLinkTheme.SECONDARY}
              to={'/about'}
            >
              <ListIcon className={cls.icon}/>
              <span className={cls.link}>
                {t('О нас')}
              </span>
            </AppLink>
          </li>
        </ul>
      </nav>
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.switcher}/>
        <LangSwitcher className={cls.switcher} short={collapsed}/>
        <Button
          data-testid='sidebar-toogle'
          onClick={onToogle}
          className={cls.switcher}
          theme={ButtonTheme.BACKGROUND}
        >
          {collapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />}
        </Button>
      </div>
    </div>
  );
};

