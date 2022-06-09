import { useState, Children } from 'react';
import { IoMdSearch as Search, IoIosArrowDown as ArrowDown } from 'react-icons/io';

const FormView = () => {

    return (
        <form className='mt-8 md:w-1/2 md:text-lg md-lg:row-start-1 md-lg:row-span-1 
                md-lg:w-1/2 dark:text-very-light-gray'>
             <p className='relative bg-white text-dark-gray flex justify-end items-center rounded-lg shadow-md dark:bg-dark-blue dark:text-white'>
                <span className='absolute left-8 z-40'>
                    <Search className='text-2xl'/>
                </span>
                <input 
                    className='relative peer w-full h-full rounded-lg py-4 pl-[4.6rem] pr-12 border border-transparent placeholder-transparent focus:outline-none focus:border-blue-500 font-medium text-very-dark-blue dark:bg-dark-blue dark:text-very-light-gray' 
                    type='text' name='search' id='country-search' 
                    placeholder='Search for a country...' maxLength='30' minLength='2'/>

                 <label 
                    className='absolute left-[4.6rem] z-20 text-transparent peer-placeholder-shown:text-dark-gray dark:peer-placeholder-shown:text-very-light-gray'
                    htmlFor='country-search' >
                    Search for a country...
                 </label>
            </p>
        </form>
    )
};

export default FormView;