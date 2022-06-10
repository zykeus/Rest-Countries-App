import React, { useState, useRef, useEffect, useCallback} from 'react';
import { useUpdateData } from '../hooks/useUpdateData';
import { useCountryData } from '../hooks/useCountryData';
import { useNavigate, useParams } from 'react-router-dom';

const CountryDetailsModel = () => {
	const { 
		countryDetailsPage, 
		countryName, 
		setCountryDetailsPage,
		setCountryName,
		setChangeUrl,
		setBordersClickedAmount,
		bordersClickedAmount
	} = useCountryData();

	const { setUpdateData } = useUpdateData();

	const [isBorderCountry, setIsBorderCountry] = useState(false);
	const navigate = useNavigate();
	const { country } = useParams();

	const detailFirstSection = {
		native_Name: '',
		population: '',
		region: '',
		sub_region: '',
		capital: '',
	};

	const handleBorderContries = useCallback((event) => {
		const btnBorders = event.target.closest('button');
		
		if(!btnBorders) return;
		setChangeUrl(true)
		setBordersClickedAmount(oldValue => oldValue + 1)
		setIsBorderCountry(true)
		setCountryName(btnBorders.textContent)
		navigate(`/details/${btnBorders.textContent.toLowerCase()}`)
	}, [isBorderCountry])

	const handleGetPreviousPage = useCallback((event) => {
		const btnPrevPage = event.target.closest('button');

		if(!btnPrevPage) return;
		navigate(-1);
		if(bordersClickedAmount <= 0) {
			 setChangeUrl(false)
			 return;
		};
		setBordersClickedAmount(oldValue => oldValue - 1);
	}, [country]);

	const detailFirstSectionKeys = Object.keys(detailFirstSection);
		
	const detailSectionKeysObject = [detailFirstSectionKeys];

	useEffect(() => {
		if(!countryName && countryDetailsPage.length <= 0) return;
		const getCountriesDetails = () => {
			if(isBorderCountry) {
				setUpdateData({
				searchValue: countryName,
				setType: setCountryDetailsPage,
				isDropDown: false
			})
				setCountryName('')
			} 
		}
		getCountriesDetails();

	}, [countryName, countryDetailsPage.length, isBorderCountry]);

	useEffect(() => {
		if(!country) return;

		setUpdateData({
			searchValue: country,
			setType: setCountryDetailsPage,
			isDropDown: false
		})
	}, [country])

	return { detailSectionKeysObject, countryDetailsPage, handleBorderContries, handleGetPreviousPage }
};

export default CountryDetailsModel;