/* eslint-disable i18next/no-literal-string */
import {LoginModal} from 'features/AuthByUsername';
import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button';
import cls from './Header.module.scss';


interface HeaderProps {
    className?: string,
}

export const Header = ({className}: HeaderProps) => {
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <nav className={cls.links}>
        <ul>
          <li>
            <Button
              theme={ButtonTheme.CLEAR}
              className={cls.item}
              onClick={onShowModal}
            >
              {t('Войти')}
            </Button>
          </li>
        </ul>
      </nav>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </header>
  );
};

