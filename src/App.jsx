

import './App.css'
import { BrowserRouter as Router,Route,Routes} from"react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import FirstSlider from './component/FirstSlider'
import ThirdNav from './component/ThirdNav'
import ServiceSection from './component/ServiceSection'
import LoveAstro from './component/LoveAstro'
import NegetiveEnergy from './component/NegetiveEnergy'
import RelationShip from './component/RelationShip'
import LocationSetion from './component/LocationSetion'
import NavFour from './component/NavFour'
import ProductDetails from './component/ProductDetails'
import ShivContact from './component/ShivContact'
import NumberSection from './component/NumberSection'
import { SliderTwo } from './utils/content'
import SecSlider from './component/SecSlider'
import Faq from './component/Faq'
import OverallView from './component/OverallView'
import Footer from './component/Footer'
import Brampton from './component/Brampton'
import Caledon from './component/Caledon'
import Oakville from './component/Oakville'
import Vaughan from './component/Vaughan'
import Mississauga from './component/Mississauga'
import Service from './component/Service'


function App() {

  return (
    <>
<Router>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='service' element={<Service/>}/>
    {/* service love start */}
    <Route path='love-astrologer' element={<LoveAstro/>}/>
    <Route path='negative-energy' element={<NegetiveEnergy/>}/>
    <Route path='relationship-problems' element={<RelationShip/>}/>
    <Route path='love-psychic-reading' element={<LoveAstro/>}/>
    <Route path='reunite-with-loved-one' element={<LoveAstro/>}/>
    {/* service love end */}
    {/* location start */}
    <Route path='astrologer-in-brampton' element={<Brampton/>}/>
    <Route path='astrologer-in-caledon' element={<Caledon/>}/>
    <Route path='astrologer-in-oakville' element={<Oakville/>}/>
    <Route path='astrologer-in-vaughan' element={<Vaughan/>}/>
    <Route path='astrologer-in-mississauga' element={<Mississauga/>}/>
    {/* location end */}

   
  </Routes>
  <FirstSlider/>
  <ThirdNav/>
  <ServiceSection/>
  <NavFour/>
  <ProductDetails/>
  <ShivContact/>
  <LocationSetion/>
  <NumberSection/>
  <SecSlider/>
  <Faq/>
  <OverallView/>
  <Footer/>
</Router>

    </>
  )
}

export default App
