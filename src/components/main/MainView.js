import { useUpdateData } from '../hooks/useUpdateData';
import { ImSpinner3 } from 'react-icons/im';

const MainView = ({ children }) => {
    const { isLoading } = useUpdateData();

    if(isLoading) return (
        <div className='absolute inset-y-0 my-0 min-h-screen w-full flex justify-center items-center text-xl text-very-darkish-blue dark:text-white'>
             <ImSpinner3 className='animate-spin dark:text-white'/> 
                <span>Loading...</span>
       </div>
    )
    return (
        <main className='relative grid md:grid-cols-main pt-8 pb-20 px-6 md:col-start-1 md:col-span-full md:gap-8 md:justify-items-center lg:px-12 xl:px-20 2xl:px-24'>{children}</main>
    )
};

export default MainView;