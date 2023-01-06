import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme_light.svg';
import DarkIcon from 'shared/assets/icons/theme_dark.svg';
import {Button, ButtonTheme} from 'shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import {t} from 'i18next';
import {clearDecorators} from '@storybook/react/dist/ts3.9/client/preview';


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toogleTheme} = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.btn, {}, [className])}
      onClick={toogleTheme}
    >
      {theme === Theme.DARK ?
              <DarkIcon className={cls.icon}/>:
              <LightIcon className={cls.icon}/>
      }
    </Button>
  );
};

