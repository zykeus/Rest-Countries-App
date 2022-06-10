import { Children, Fragment } from 'react';

const BordersView = ({country, handleBorderContries}) => {
	return (
		<Fragment>
			{country.borders ? 
			<Fragment>
				<h3 className='text-lg font-bold text-very-dark-blue sm:text-[1.2rem] xl:text-2xl dark:text-very-light-gray md:text-base md:w-52 md:pr-4'>
					Border Countries:
				</h3>
				<ul className='flex flex-wrap w-full mt-4 md:mt-0 md:flex-wrap'>
					{Children.toArray(
						country.borders.map(border => (
							<li className='shadow-2xl border-2 rounded-sm px-4 text-base bg-white mr-2 my-4 py-1 flex
								last:mr-0 justify-center items-center w-1/4 
								grow  md:my-0 md:mt-2 md:text-sm md:w-1/5 dark:bg-dark-blue dark:border-0 
								dark:shadow'>
								<button onClick={handleBorderContries}>
									{border}
								</button>
							</li>
						))
					)}
				</ul>
			</Fragment>
		: 	<p className='uppercase lg:flex lg:items-center text-very-dark-blue font-bold 
				dark:text-very-light-gray dark:font-medium md:text-base'>
				This country has no borders...
			</p>
		}
		</Fragment>
	)
}

export default BordersView;