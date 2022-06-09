import FormController from '../form/FormController';
import DropDownController from './DropDownController';
import Paginate from './Pagination';

const HomePageController = () => {
    return (
        <>
            <FormController />
            <DropDownController />
            <Paginate />
        </>
    )
};

export default HomePageController;