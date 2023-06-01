import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TopButtons from './components/TopButtons/TopButtons'
import { TiWeatherPartlySunny } from 'react-icons/ti';

function App() {

  return (
    <div className='flex justify-center '>
      <div className='mx-2 w-full max-w-screen-md mt-4 py-5 bg-gradient-to-br from-cyan-700 to-blue-800 h-fit shadow-xl shadow-gray-900 rounded'>
        <h2 className='flex justify-center items-center text-2xl font-bold'>Weather App&nbsp;<TiWeatherPartlySunny /></h2>
        <Header />
        <TopButtons />
        
        <Footer />
      </div>
    </div>
  )
}

export default App
