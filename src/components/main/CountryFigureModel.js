import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCountryData } from '../hooks/useCountryData';

const CountryFigureModel = () => {
	const { countryName, setCountryName, setChangeUrl } = useCountryData();
	const navigate = useNavigate();

	const handleGetHeadingElement = useCallback((ev) => {
		ev.preventDefault();
		const figureElement = ev.target.closest('figure');

		 if(ev.key === 'Enter' || ev.type === 'click') {
		 	const getCountryName = figureElement.lastChild.firstChild.textContent;
			setChangeUrl(true);
			setCountryName(getCountryName.toLowerCase());
			navigate(`/details/${getCountryName.toLowerCase()}`)
		 } else return
		
	}, [countryName])
	return { handleGetHeadingElement }
};

export default CountryFigureModel;