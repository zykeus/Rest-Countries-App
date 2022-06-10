import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import ThemeContextProvider from './components/hooks/useDarkMode';
import CountryDataProvider from './components/hooks/useCountryData';
import InvalidRouteView from './components/invalid-route/InvalidRouteView';
import { ImSpinner3 } from 'react-icons/im';

const Pagination = lazy(() => import('./components/main/Pagination'));
const CountryDetailsController = lazy(() => import('./components/details/CountryDetailsController'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CountryDataProvider>
        <Suspense fallback={
          <div className='absolute inset-y-0 my-0 min-h-screen w-full flex justify-center items-center text-xl text-very-darkish-blue dark:text-white'>
             <ImSpinner3 className='animate-spin dark:text-white'/> 
                <span>Loading...</span>
          </div>
        }>
          <Router>
            <Routes>
              <Route path='/' element={<App />}>
                <Route path='page/:number' element={<Pagination />} />
                <Route path='details/:country' element={<CountryDetailsController />} />
              </Route>
              <Route path='*' element={<InvalidRouteView />} />
            </Routes>
          </Router>
        </Suspense>
      </CountryDataProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

