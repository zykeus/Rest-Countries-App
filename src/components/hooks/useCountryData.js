import { useContext, useEffect, useState, createContext } from 'react';
import { useUpdateData } from './useUpdateData';

const CountryContextData = createContext();

const CountryDataProvider = ({children}) => {
	const [countryData, setCountryData] = useState([]);
    const { setUpdateData } = useUpdateData();
    const [pageNumber, setPageNumber] = useState(0);

	useEffect(() => {
		setUpdateData({	
			setType: setCountryData, 
            searchType: 'all',
			errorMessage: 'Something went wrong. Countries not Found. Check url request and try again',
            isDropDown: false
		})
    }, []);
    
	return (
		<CountryContextData.Provider value={
                {
                    countryData, 
                    setCountryData, 
                    pageNumber, 
                    setPageNumber, 
                }}>
			{children}
		</CountryContextData.Provider>
	)
};

export const useCountryData = () => {
	return useContext(CountryContextData);
};

export default CountryDataProvider;



