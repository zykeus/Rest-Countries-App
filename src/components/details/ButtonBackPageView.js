const ButtonBackPageView = ({handleGetPreviousPage}) => {
	return (
		<button onClick={handleGetPreviousPage} className='bg-white overflw-hidden border-2 rounded-sm shadow shadow-dark-gray flex justify-between px-6 items-center text-detail-page md:col-start-1 md:col-span-full md:text-lg lg:text-xl xl:text-base dark:bg-dark-blue dark:border-0 dark:shadow-very-dark-blue dark:shadow'>
			<span className='inline-block text-very-dark-blue extra-bold text-xl mr-1 sm:text-2xl dark:text-white'>
					&larr;
			</span> 
			<em className='inline-block font-light not-italic text-very-dark-blue dark:text-very-light-gray'>
					Back
			</em>
		</button>
	)
};

export default ButtonBackPageView;