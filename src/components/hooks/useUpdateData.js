import api from '../../api/api';
import { useState, useEffect } from 'react';

export const useUpdateData = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [updateData, setUpdateData] = useState({
		setType: function(){},
		searchType: 'all',
		errorMessage: 'Country not found'
	})

	useEffect(() => {
		if(!updateData.searchValue && !updateData.searchType) return;
		const { searchType, setType, errorMessage } = updateData;
		const fetchData = async () => {
			try {
	           const { data: countriesData } = await api.get(`/${searchType}`);
           		setType(countriesData)
			} catch(err) {
				setError(err)
			} finally {	
				setIsLoading(false);
			}
		}
		fetchData();
	}, [])

	return { setUpdateData, error, isLoading }
}