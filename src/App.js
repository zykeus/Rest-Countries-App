import HeaderController from './components/header/HeaderController';
import MainController from './components/main/MainController';
import CountryDataProvider from './components/hooks/useCountryData';

function App() {
  return (
    <>
      <CountryDataProvider>
        <HeaderController />
        <MainController />
      </CountryDataProvider>
    </>
  );
}

export default App;
