import { useContext, useEffect, useState, createContext } from 'react';
import { useApi } from './useApi';

const CountryContextData = createContext();

const CountryDataProvider = ({children}) => {
	const [countryData, setCountryData] = useState([]);
    const { setUpdateData } = useApi();

	useEffect(() => {
		setUpdateData({	
			setType: setCountryData, 
            searchType: 'all',
			errorMessage: 'Something went wrong. Countries not Found. Check url request and try again',
		})
    }, []);
    
	return (
		<CountryContextData.Provider value={ { countryData, setCountryData } }>
			{children}
		</CountryContextData.Provider>
	)
};

export const useCountryData = () => {
	return useContext(CountryContextData);
};

export default CountryDataProvider;


