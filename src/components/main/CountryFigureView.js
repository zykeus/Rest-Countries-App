import { Children, Fragment } from 'react';
import FigureMainView from './FigureMainView';

const COUNTRY_TITLES_SPEC = ['population', 'region', 'capital'];

const Figure = ({country}) => {
	return (
		<FigureMainView country={country}>
			{Children.toArray(
				COUNTRY_TITLES_SPEC.map(titles => {
					return (
						<p>{titles.at(0).toUpperCase() + titles.slice(1)}: 
						<span className='relative inline-block left-2 very-darkish-blue font-light dark:very-light-gray'>
							{country[titles] ? country[titles] : 'None'}
						</span>
						</p>
					)
				})
			)}
		</FigureMainView>
	)
} 
const CountryFigureView = ({countryData}) => {
	return (
		<>
			{countryData && countryData.length > 0 ?
				<Fragment>
					{Children.toArray(
						countryData.map(country => {
							return <Figure country={country} />
						})
					)}
				</Fragment>
			: null
			}
		</>
		
	)
};

export default CountryFigureView;