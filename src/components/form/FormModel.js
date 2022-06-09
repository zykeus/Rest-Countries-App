import { useState, useLayoutEffect } from 'react';
import { useCountryData } from '../hooks/useCountryData';
import { useUpdateData } from '../hooks/useUpdateData';
import { useNavigate } from 'react-router-dom';

const FormModel = () => {
    const [inputCountry, setInputCountry] = useState({
        change: '',
        submit: '',
    });
    const { setCountryData, setPageNumber } = useCountryData();
    const { setUpdateData } = useUpdateData();
    const navigate = useNavigate();
    
    const handleInputCountryChange = (ev) => {
        ev.preventDefault();
        setInputCountry({ change: ev.target.value, submit: ''});
    };

    const handleInputCountrySubmit = (ev) => {

        if(ev.key === 'Enter') {
            ev.preventDefault();
            setInputCountry({ submit: ev.target.value, change: ''})
        }
    }

     useLayoutEffect(() => {
        if(!inputCountry.submit) return;

        setUpdateData({    
            setType: setCountryData,
            searchValue: inputCountry.submit, 
            errorMessage: 'Invalid Continent',
            isDropDown: false,
        })
        setPageNumber(1)
        navigate(`/page/${1}`)

    }, [inputCountry.submit]);

    return {
        inputCountry, handleInputCountryChange, handleInputCountrySubmit
    }
};


export default FormModel;