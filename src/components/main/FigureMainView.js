const FigureMainView = ({country, handleGetHeadingElement=null, children}) => {
	return (
		<figure tabIndex='0' onClick={handleGetHeadingElement} onKeyPress={handleGetHeadingElement} className='w-full my-6 font-medium md:my-0 md:items-grow flex flex-col sm:text-lg md:text-xl cursor-pointer dark:text-white'>
				<img className='h-full object-cover w-full' src={country.flag} alt={country.name}/>
				<footer className='h-full flex flex-col justify-center bg-white rounded-b-lg grow shadow-lg pt-6 px-6 pb-12 dark:bg-dark-blue'>
					<h2 className='font-extra-bold mb-4'>{country.name}</h2>
					{children}
				</footer>
		</figure>
	)
};

export default FigureMainView;