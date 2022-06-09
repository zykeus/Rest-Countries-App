import FormView from "./FormView";
import FormModel from "./FormModel";

const FormController = () => {
    const { inputCountry, handleInputCountryChange, handleInputCountrySubmit} = FormModel();
   
    return (
        <FormView model={{ inputCountry, handleInputCountryChange, handleInputCountrySubmit}} />
    )
};

export default FormController;