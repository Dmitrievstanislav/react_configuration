/* eslint-disable i18next/no-literal-string */
import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {Button, ButtonTheme} from 'shared/ui/Button';
import {Modal} from 'shared/ui/Modal';
import cls from './Header.module.scss';


interface HeaderProps {
    className?: string,
}

export const Header = ({className}: HeaderProps) => {
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <nav className={cls.links}>
        <ul>
          <li>
            <Button
              theme={ButtonTheme.CLEAR}
              className={cls.item}
              onClick={onToggleModal}
            >
              {t('Войти')}
            </Button>
          </li>
        </ul>
      </nav>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          We are looking for self-starter engineers with full-stack
      </Modal>
    </header>
  );
};

