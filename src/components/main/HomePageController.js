import FormController from '../form/FormController';
import DropDownController from './DropDownController';
import Paginate from './Pagination';
import ContainerView from './ContainerView';

const HomePageController = () => {
    return (
        <>
            <ContainerView>
                <FormController />
                <DropDownController />
            </ContainerView>
            <Paginate />
        </>
    )
};

export default HomePageController;