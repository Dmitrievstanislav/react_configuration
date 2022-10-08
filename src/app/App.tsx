import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProviders";
import { AppRouter } from "./providers/router";
import { Header } from "widgets/Header";



const App = () => {
    const { theme, toogleTheme } = useTheme();

    return (
        <div>
            <div className={classNames("app", {}, [theme])}>
                <Header />
            </div>
            <AppRouter />
            <button onClick={toogleTheme}>Toogle Theme</button>
        </div>
    );
};

export default App;
