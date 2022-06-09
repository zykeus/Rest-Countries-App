import DropDownView from './DropDownView';
import DropDownModel from './DropDownModel';

const DropDownController = () => {
	const { dropDownState: {continentNames, optionChoosen, showDropDown}, handleDropDownState } = DropDownModel();

	return (
		<DropDownView model={
			{ continentNames, optionChoosen, showDropDown, handleDropDownState }
		}/>
	)
};

export default DropDownController;