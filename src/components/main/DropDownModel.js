import { useUpdateData } from '../hooks/useUpdateData';
import { useCountryData } from '../hooks/useCountryData';
import { useState, useEffect } from 'react';

const DropDownModel = () => {
     const [dropDownState, setDropDownState] = useState({
        continentNames: [],
        optionChoosen: 'Filter by Region',
        showDropDown: false
    })

    const { setCountryData } = useCountryData();
    const { setUpdateData } = useUpdateData();

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
        if(!dropDownState.showDropDown) return;
         setUpdateData({    
            setType: setDropDownState, 
            isDropDown: true,
            searchType: 'all',
            errorMessage: 'Invalid Continent'
        })
    }, [dropDownState.showDropDown]);

    useEffect(() => {
        if(dropDownState.optionChoosen === 'Filter by Region') return;
        setUpdateData({    
            setType: setCountryData, 
            searchType: 'region',
            searchValue: dropDownState.optionChoosen,
            errorMessage: 'Invalid Continent'
        })
    }, [dropDownState.optionChoosen])

    return {dropDownState, handleDropDownState}

};

export default DropDownModel;