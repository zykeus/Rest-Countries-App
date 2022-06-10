import { Children } from 'react';
import FigureDetailsView from './FigureDetailsView';

const CountryDetailsView = ({countryDetailsPage, handleGetPreviousPage, handleBorderContries}) => {
	return (
		<>
			{countryDetailsPage.length > 0 ? 
				Children.toArray(
					countryDetailsPage.map(country => {
						return (
							<FigureDetailsView country={country} handleBorderContries={handleBorderContries} handleGetPreviousPage={handleGetPreviousPage} />
						)
					})
				) 
			: countryDetailsPage.name ? <FigureDetailsView country={countryDetailsPage} handleBorderContries={handleBorderContries} handleGetPreviousPage={handleGetPreviousPage}/> : null
			}
		</>
		
	)
};

export default CountryDetailsView;