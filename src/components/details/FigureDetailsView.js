import { useUpdateData } from '../hooks/useUpdateData';
import { ImSpinner3 } from 'react-icons/im';
import ButtonBackPageView from './ButtonBackPageView';
import CurrenciesView from './CurrenciesView';
import FinalDetailsBlockView from './FinalDetailsBlockView';
import FirstDetailsBlockView from './FirstDetailsBlockView';
import SecondDetailsBlockView from './SecondDetailsBlockView';
import LanguagesView from './LanguagesView';
import TopLevelDomainView from './TopLevelDomainView';
import BordersView from './BordersView';


const TOPLISTDETAILS = ['native_Name', 'population', 'region', 'sub_region', 'capital']

const FigureDetailsView = ({country, handleBorderContries, handleGetPreviousPage, ButtonBackPage}) => {
	const { isLoading } = useUpdateData();

	if(isLoading) return (
		<div className='absolute inset-y-0 my-0 min-h-screen w-full flex justify-center items-center text-xl text-very-darkish-blue dark:text-white'>
             <ImSpinner3 className='animate-spin dark:text-white'/> 
             	<span>Loading...</span>
       </div>
	)

	return (
		<div className='md:col-start-1 md:col-span-full px-6 md:px-12 xl:px-20 py-6'>

			<ButtonBackPageView handleGetPreviousPage={handleGetPreviousPage} />

			<figure className='flex flex-col h-fit bg-very-light-gray w-full mt-14 mb-6 font-medium sm:text-lg dark:text-white text-left text-detail-page md:grid md:grid-cols-details md:gap-x-12 md-lg:gap-x-16 lg:text-xl xl:gap-32 xl:text-2xl dark:bg-very-darkish-blue dark:shadow-auto dark:border-none'>

				<img className={`w-full md:max-w-sm md:h-80 md:object-cover md-lg:max-w-md  md-lg:h-full cursor-pointer lg:max-w-xl xl:max-w-2xl`} src={country.flag} alt={country.name} />

				<footer className='bg-very-light-gray rounded-b-lg grow pt-8 pb-12  dark:bg-very-darkish-blue md:pt-2 md-lg:grid md-lg:grid-cols-2 md-lg:gap-x-8 xl:gap-x-32 md:text-sm lg:text-lg lg:pt-10 xl:text-lg xl:pt-14'>

					<h2 className='font-extra-bold mb-4 text-xl sm:text-[1.2rem] md:text-2xl xl:text-3xl md:col-start-1 md:col-span-full'>
						{country.name}
					</h2>

					<FirstDetailsBlockView country={country} 
						TOPLISTDETAILS={TOPLISTDETAILS} />

					<SecondDetailsBlockView>
						<TopLevelDomainView country={country}/>
						<CurrenciesView country={country} />
						<LanguagesView country={country} />
					</SecondDetailsBlockView>

					<FinalDetailsBlockView>
						<BordersView country={country} 
							handleBorderContries={handleBorderContries}/>
					</FinalDetailsBlockView>

				</footer>

			</figure>
		</div>
	)
}

export default FigureDetailsView;