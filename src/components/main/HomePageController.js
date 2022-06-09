import FormController from '../form/FormController';
import { useCountryData } from '../hooks/useCountryData';
import CountryFigureController from './CountryFigureController';
import DropDownController from './DropDownController';

const HomePageController = () => {
    const { countryData } = useCountryData();
    return (
        <>
            <FormController />
            <CountryFigureController countryData={countryData} />
            <DropDownController />
        </>
    )
};

export default HomePageController;