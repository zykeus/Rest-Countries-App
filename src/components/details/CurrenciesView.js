import { Children } from 'react';

const CurrenciesView = ({country}) => {
	return (
		<li className='mt-2'>
			<p className='text-very-dark-blue font-medium mr-2 dark:text-white'>Currencies: 
				{Children.toArray(
					country.currencies ? country.currencies
					.map(currency => (
						<span className='inline-block ml-2 text-very-darkish-blue font-light dark:text-very-light-gray'>
							{currency.name}
						</span>
					)) :
					<span className='inline-block ml-2 text-very-darkish-blue font-light dark:text-very-light-gray'>None
					</span>
				)}
			</p>
		</li>
	)
};

export default CurrenciesView;