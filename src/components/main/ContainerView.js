const ContainerView = ({children}) => {
	return (
		<div className='md:flex md:flex-col md:items-center md:justify-center md-lg:flex-row md-lg:items-center md-lg:justify-between md:col-start-1 md:col-span-full md:row-start-1 md:row-span-1 md:w-full'>
			{children}
		</div>
	)
};

export default ContainerView;