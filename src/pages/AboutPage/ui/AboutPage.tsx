import {useTranslation} from 'react-i18next';

const AboutPage = () => {
  const {t} = useTranslation('aboutUs');
  return (
    <div>
      {t('О нас')}
    </div>
  );
};

export default AboutPage;
