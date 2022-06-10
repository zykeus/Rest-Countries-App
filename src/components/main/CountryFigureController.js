import CountryFigureView from './CountryFigureView';
import CountryFigureModel from './CountryFigureModel';

const CountryFigureController = (props) => {
	const { handleGetHeadingElement } = CountryFigureModel();

	return (
		<CountryFigureView {...props} handleGetHeadingElement={handleGetHeadingElement}/>
	)
};

export default CountryFigureController;