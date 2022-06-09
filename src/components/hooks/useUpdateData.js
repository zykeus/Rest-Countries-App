import api from '../../api/api';
import { useState, useEffect } from 'react';

export const useUpdateData = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [updateData, setUpdateData] = useState({
		setType: function(){},
		searchValue: '',
		searchType: 'all',
		isDropDown: false,
		errorMessage: 'Country not found'
	})

	useEffect(() => {
		if(!updateData.searchValue && !updateData.searchType) return;
		const { searchType, setType, isDropDown, errorMessage, searchValue } = updateData;
		const fetchData = async () => {
			try {
				if(searchValue) {
                	if(searchType === 'region') {
                    const {data: countriesData} = await api.get(`${searchType}/${searchValue.trim()}`)
                    setType(countriesData);
                    return;
                	}
                
	                const searchTrimed = searchValue.trim();
	                const searchTyped = searchValue.length <= 3 ? 'alpha' : 'name';
	                const checkForSpaces = searchTrimed.includes(' ');


	                const checkIsFullName = checkForSpaces ? `${searchTyped}/${searchTrimed}?fullText=true` :
	                `${searchTyped}/${searchTrimed}`;

               		const {data: countriesData} = await api.get(`/${checkIsFullName}`);
               		setType(countriesData)
               		return;
	           } else {
	           		const {data: countriesData} = await api.get(`/${searchType}`);
	           		if(isDropDown) {
		                setType(oldsetDropDownState => {
		                    const continents = new Set(countriesData.map(country => country.region));
		                    return {...oldsetDropDownState, 
		                        continentNames: [...continents],
		                    }
		                })
           		 	} else setType(countriesData)
           		}
			} catch(err) {
				setError(err)
			} finally {	
				setIsLoading(false);
			}
		}
		fetchData();
	}, [updateData.searchValue, updateData.searchType])

	return { setUpdateData, error, isLoading }
}