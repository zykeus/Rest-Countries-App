import MainView from './MainView';
import HomePageController from './HomePageController';
import CountryDetailsController from '../details/CountryDetailsController';
import { useCountryData } from '../hooks/useCountryData';

const MainController = () => {
    const { isUrlChanged } = useCountryData()
    return (
        <MainView>
            { isUrlChanged ?
                <CountryDetailsController />
              : <HomePageController />
            }
        </MainView>
    )
};

export default MainController;