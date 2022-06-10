import CountryDetailsModel from './CountryDetailsModel';
import { lazy, Suspense } from 'react';
import { ImSpinner3 } from 'react-icons/im';
import CountryDetailsView from './CountryDetailsView';


const CountryDetailsController = () => {
	const { countryDetailsPage, handleBorderContries, handleGetPreviousPage } = CountryDetailsModel();

	return (
		<CountryDetailsView countryDetailsPage={countryDetailsPage} handleGetPreviousPage={handleGetPreviousPage} handleBorderContries={handleBorderContries}>
		</CountryDetailsView>
	)
};

export default CountryDetailsController;