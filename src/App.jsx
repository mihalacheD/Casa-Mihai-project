import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Acasa from './Pages/Acasa';
import Camere from './Pages/Camere';
import Activitati from './Pages/Activitati';
import Transfer from './Pages/Transfer';
import Contact from './Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import PageContent from  './Components/pageContent';
import ConditionalRender from "./Components/ConditionlRendering";
import Footer from "./Components/Footer";
import AcordDate from "./Pages/AcordDate";
import Nota from "./Pages/Nota";
import PoliticaConfidentiala from "./Pages/PoliticaConfindentiala";
import DespreNoi from "./Pages/DespreNoi";
import Galerie from './Pages/Galerie';
import PhoneButton from "./Buttons/PhoneButton";
import Excursii from "./Pages/Excursii";
import Gastronomia from "./Pages/Gastronomia";
import Obiective from "./Pages/Obiective";
import Plaja from "./Pages/Plaja";
import Testimoniale from "./Components/Testimoniale";
import Up from "./Buttons/Up";





function App() {


  return(
  <>
  <Router>
   <Header/>
   <PhoneButton/>
   <Up/>
    <Routes>
      <Route index element={<Acasa/>}></Route>
      <Route path='/camere' element={<Camere/>}></Route>
      <Route path='/activitati' element={<Activitati/>}></Route>
      <Route path='/transfer' element={<Transfer/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/acord' element={<AcordDate/>}></Route>
      <Route path='/nota' element={<Nota/>}></Route>
      <Route path='/politica' element={<PoliticaConfidentiala/>}></Route>
      <Route path='/despreNoi' element={<DespreNoi/>}></Route>
      <Route path='/galerie' element={<Galerie/>}></Route>
      <Route path="/excursii" element={<Excursii/>}></Route>
      <Route path="/gastronomia" element={<Gastronomia/>}></Route>
      <Route path="/obiective" element={<Obiective/>}></Route>
      <Route path="/plaja" element={<Plaja/>}></Route>
    </Routes>
    <ConditionalRender>
      <MainSection/>
      <PageContent/>
      <Testimoniale/>
  </ConditionalRender>
    <Footer/>
  </Router>
  </>
  )
}

export default App