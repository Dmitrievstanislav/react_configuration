import './styles/index.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProviders';
import {AppRouter} from './providers/router';
import {Header} from 'widgets/Header';
import {Sidebar} from 'widgets/Sidebar';
import {Suspense} from 'react';


const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <div className="contentPage">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
