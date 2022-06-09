import { useUpdateData } from '../hooks/useUpdateData';
import { useCountryData } from '../hooks/useCountryData';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DropDownModel = () => {
     const [dropDownState, setDropDownState] = useState({
        continentNames: [],
        optionChoosen: 'Filter by Region',
        showDropDown: false
    })

    const { setCountryData, setPageNumber } = useCountryData();
    const { setUpdateData } = useUpdateData();
    const navigate = useNavigate();

     const handleDropDownState = (ev) => {
        ev.preventDefault();

        const liOptionElement = ev.target.closest('li');
        const btnDropDown = ev.target.closest('button');

        if(!liOptionElement && !btnDropDown) return;

        if(ev.key === 'Enter' || ev.type === 'click') {
            if(liOptionElement) {
                setDropDownState(oldsetDropDownState => {
                    return {...oldsetDropDownState,
                        optionChoosen: liOptionElement.textContent,
                        showDropDown: !oldsetDropDownState.showDropDown
                    }
                })
            }

            if(btnDropDown) {
                setDropDownState(oldsetDropDownState => {
                    return {...oldsetDropDownState, showDropDown: !oldsetDropDownState.showDropDown}
                })
            }
        } else return;
    };  


    useEffect(() => {
         setUpdateData({    
            setType: setDropDownState, 
            isDropDown: true,
            searchType: 'all',
            errorMessage: 'Invalid Continent'
        })
    }, []);

    useEffect(() => {
        if(dropDownState.optionChoosen === 'Filter by Region') return;
        setUpdateData({    
            setType: setCountryData, 
            searchType: 'region',
            searchValue: dropDownState.optionChoosen,
            errorMessage: 'Invalid Continent'
        })
        setPageNumber(1)
        navigate(`/page/${1}`)
    }, [dropDownState.optionChoosen])

    return {dropDownState, handleDropDownState}

};

export default DropDownModel;