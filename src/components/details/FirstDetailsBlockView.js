import { Children } from 'react';

const FirstDetailsBlockView = ({country, TOPLISTDETAILS}) => {
	return (
		<ul className='mb-8 md:w-full'>
			{Children.toArray(
				TOPLISTDETAILS.map(titles =>
					<li className='mt-2 md:flex'>
						<p className='text-very-dark-blue font-medium mr-2 md:mr-0 dark:text-white grow'>{`${titles.at(0).toUpperCase() + 
							titles.slice(1).replaceAll('_', ' ')}`}:
							<span className='ml-2 md:pl-2
								md:first:ml-0 text-very-darkish-blue font-light dark:text-very-light-gray'>
								{country[`${titles.replaceAll('_','')}`] ?
								 country[`${titles.replaceAll('_','')}`] 
								: 'None'}
							</span>
						</p>
					</li>
				)
			)}	
		</ul>
	)
};

export default FirstDetailsBlockView;