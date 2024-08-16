import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Desert from './Components/Desert'
import Banner from './Components/Banner'
import Popular from './Components/Popular'
import Testominals from './Components/Testominals'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-white2 '>
      <div className='relative overflow-hidden'>
      <Navbar/>
      <Hero/>
      </div>
      <Desert/>
      <Banner/>
      <Popular/>
      <Testominals/>
      <Footer/>
    </div>
  )
}

export default App
