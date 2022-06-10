import { useContext, useEffect, useState, createContext } from 'react';
import { useUpdateData } from './useUpdateData';

const CountryContextData = createContext();

const CountryDataProvider = ({children}) => {
	const [countryData, setCountryData] = useState([]);
	const [countryDetailsPage, setCountryDetailsPage] = useState([]);
	const [countryName, setCountryName] = useState('');
    const { setUpdateData } = useUpdateData();
    const [pageNumber, setPageNumber] = useState(0);
    const [isUrlChanged, setChangeUrl] = useState(false);
    const [bordersClickedAmount, setBordersClickedAmount] = useState(0);

	useEffect(() => {
		setUpdateData({	
			setType: setCountryData, 
            searchType: 'all',
            isDropDown: false
		})
    }, []);
    
	return (
		<CountryContextData.Provider value={
                {
                    countryData, 
                    setCountryData, 
                    countryDetailsPage, 
                    setCountryDetailsPage, 
                    countryName, 
                    setCountryName, 
                    pageNumber, 
                    setPageNumber, 
                    setChangeUrl, 
                    isUrlChanged,
                    bordersClickedAmount,
                    setBordersClickedAmount
                }}>
			{children}
		</CountryContextData.Provider>
	)
};

export const useCountryData = () => {
	return useContext(CountryContextData);
};

export default CountryDataProvider;



