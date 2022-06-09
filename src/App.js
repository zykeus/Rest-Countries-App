import React from 'react';
import { Route, Routes } from 'react-router';
import HeaderController from './components/header/HeaderController';
import MainController from './components/main/MainController';
import CountryDataProvider from './components/hooks/useCountryData';
import Pagination from './components/main//Pagination';
import { ImSpinner3 } from 'react-icons/im';
import { useUpdateData } from './components/hooks/useUpdateData';

function App() {
   const { isLoading } = useUpdateData();

    if(isLoading) return (
       <div className='absolute inset-y-0 my-0 min-h-screen w-full flex justify-center items-center text-xl text-very-darkish-blue dark:text-white'>
             <ImSpinner3 className='animate-spin dark:text-white'/> <span>Loading...</span>
       </div>
    )

  return (
    <>
      <HeaderController />
      <CountryDataProvider>
        <Routes>
          <Route path='/' element={<MainController />}>
             <Route path='page/:number' element={<Pagination />} />
          </Route>
        </Routes>
      </CountryDataProvider>
    </>
  );
}

export default App;
