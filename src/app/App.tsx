import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProviders";
import { AppRouter } from "./providers/router";


const App = () => {
    const { theme, toogleTheme } = useTheme();

    return (
        <div>
            <div className={classNames("app", {}, [theme])}>
                <button onClick={toogleTheme}>Toogle Theme</button>
                <Link to={"/"}>Главная</Link>
                <Link to={"/about"}>О нас</Link>
            </div>
            <AppRouter />
        </div>
    );
};

export default App;
