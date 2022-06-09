import FormController from '../form/FormController';
import { useCountryData } from '../hooks/useCountryData';
import CountryFigureController from './CountryFigureController';

const HomePageController = () => {
    const { countryData } = useCountryData();
    return (
        <>
            <FormController />
            <CountryFigureController countryData={countryData} />
        </>
    )
};

export default HomePageController;