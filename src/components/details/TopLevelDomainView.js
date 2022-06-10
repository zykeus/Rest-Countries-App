const TopLevelDomainView = ({country}) => {
	return (
		<li className='mt-2 md:flex'>
			<p className='text-very-dark-blue font-medium mr-2 dark:text-white'>
				Top Level Domain: 
				<span className='inline-block ml-2 text-very-darkish-blue font-light dark:text-very-light-gray'>
				{country.topLevelDomain}
				</span>
			</p>
		</li>
	)
};

export default TopLevelDomainView;