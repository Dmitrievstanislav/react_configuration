import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button';
import {Input} from 'shared/ui/Input/Input';


import cls from './LoginForm.module.scss';


interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
  const {t} = useTranslation();
  const [value, setValue] = useState('');
  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <h2 className={cls.title}>{t('Авторизация')}</h2>
      <h3 className={cls.titleInput}>{t('Имя или почта')}</h3>
      <Input type='text' className={cls.input} />
      <h3 className={cls.titleInput}>{t('Пароль')}</h3>
      <Input type='password' className={cls.input}/>
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
