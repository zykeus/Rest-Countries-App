import { Children } from 'react';
import { MdKeyboardArrowDown as ArrowDown } from 'react-icons/md';
const DropDownView = ({model}) => {
    return (
            <div className='relative w-2/3 grid gap-2 my-8 md:col-start-1 md:col-span-full md:text-lg md-lg:row-start-1 md-lg:col-span-full md-lg:col-start-auto md-lg:w-3/4 md-lg:justify-self-end md-lg:self-center'>
                <p className='relative w-full bg-white flex items-center justify-between font-medium text-very-dark-blue border-2 border-transparent rounded-md pl-8 pr-6 py-4 shadow-md z-30 dark:bg-dark-blue dark:text-very-light-gray'>{model.optionChoosen}
                    <button onClick={model.handleDropDownState} onKeyPress={model.handleDropDownState} ><ArrowDown className='inline-block'/></button>
                </p>
                <ul className={`${model.showDropDown ? 'absolute top-20 left-0': 'hidden'} w-full pl-8 py-4  z-20 bg-white h-fit border-transparent rounded-md text-very-dark-blue font-medium shadow-lg dark:bg-dark-blue dark:text-very-light-gray`}>
                    {Children.toArray(model.continentNames.map(continent => {
                        return <li tabIndex='0' onClick={model.handleDropDownState} onKeyPress={model.handleDropDownState} className='block pb-2 cursor-pointer'>{continent}</li>
                    }))}
                </ul>
            </div>  
    )
};

export default DropDownView;