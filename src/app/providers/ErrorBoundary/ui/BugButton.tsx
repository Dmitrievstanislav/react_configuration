import {t} from 'i18next';
import {useEffect, useState} from 'react';
import {Button} from 'shared/ui/Button';


// Component for testing errors
export const BugButton = () => {
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
    >
      {t('Сделать ошибку')}
    </Button>
  );
};

