import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TopButtons from './components/TopButtons/TopButtons'
import { TiWeatherPartlySunny } from 'react-icons/ti';
import Inputs from './components/Inputs/Inputs';
import TimeAndLocation from './components/TimeAndLocation/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails/TemperatureAndDetails';

function App() {

  return (
    <div className='flex justify-center lg:m-4 lg:rounded'>
      <div className='w-full max-w-screen-md py-5 bg-gradient-to-br from-cyan-700 to-blue-800 h-fit shadow-xl shadow-gray-900'>
        <h2 className='flex justify-center items-center text-2xl font-bold'>Weather App&nbsp;<TiWeatherPartlySunny /></h2>
        <Header />
        <TopButtons />
        <Inputs />
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Footer />
      </div>
    </div>
  )
}

export default App
