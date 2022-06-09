import { useDarkMode } from "../hooks/useDarkMode";
import HeaderView from "./HeaderView";

const HeaderController = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <HeaderView isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    )
};

export default HeaderController;