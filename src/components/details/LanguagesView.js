import { Children, Fragment } from 'react';

const LanguagesView = ({country}) => {
	return (
		<ul className='flex mt-2'>
			<ul className='flex flex-wrap w-full'>
				<p className='pr-2'>Languages:</p>
				{Children.toArray(
					country.languages.map(lang => (
						<Fragment>
							<li className='mr-2'>
								<span className='inline-block  text-very-darkish-blue font-light dark:text-very-light-gray'>
									{lang.name}
								</span>
							</li>
						</Fragment>
					))
				)}
			</ul>
		</ul>
	)
}
export default LanguagesView;