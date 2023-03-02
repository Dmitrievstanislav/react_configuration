import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {getCounterValue} from '../modal/selector/getCounterValue/getCounterValue';
import {counterActions} from '../modal/slice/counterSlice';

export const Counter = () => {
  const {t} = useTranslation();
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>
        {counterValue}
        <button
          onClick={increment}
          data-testid='increment-btn'
        >
          {t('Увеличить')}
        </button>
        <button
          onClick={decrement}
          data-testid='decrement-btn'
        >
          {t('Уменьшить')}
        </button>
      </h1>
    </div>
  );
};


