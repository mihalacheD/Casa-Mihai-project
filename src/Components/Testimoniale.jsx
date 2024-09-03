import '../styles/Testimoniale.scss';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';

function Testimoniale(){
return(
  <Carousel className='container-carousel'>
    <Carousel.Item className='carousel-items'>
    <div className='line'></div>
    <div className='line'></div>
      <h1 className='carousel__title'>Ce spun oaspeții noștri</h1>
      <div className='carousel-elements'>
            <h5 className='person-name'>Irina</h5>
            <p className='carousel-p'>
              <i className='ghilimele-icon'><ImQuotesLeft /></i>
              Doar ce am încheiat o scurta vacanță în Deltă. Casa Mihai ne-a fost
               CASĂ pentru câteva zile și spunem cu sufletul deschis că totul a fost
                la superlativ. Cazarea de nota 10, camere mari, curate, mobilate cu
                 bun gust, foișorul din curte enorm, perfect pentru a te strânge cu 
                 prietenii seara la un joc și un pahar. Pontonul din fata  pensiunii 
                 numai potrivit pentru a te răcori după o zi la plaja sau pescuit.
                 De abia așteptam să ne revedem!
              <i className='ghilimele-icon'><ImQuotesRight /></i>
            </p>
            <ul className='five-star'>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
        </ul>
        </div>
        </Carousel.Item>


    <Carousel.Item className='carousel-items'>
    <div className='line'></div>
    <div className='line'></div>
    <h1 className='carousel__title'>Ce spun oaspeții noștri</h1>
      <div className='carousel-elements'>
            <h5 className='person-name'>Simona</h5>
            <p className='carousel-p'>
              <i className='ghilimele-icon'><ImQuotesLeft /></i>
              Casa Mihai este ospitalitate, confort, curatenie, mancare gustoasa, liniste, intimitate, servicii si facilitati cum nu gasesti nicaieri
               in Sulina, este povestea pe care ti o proiectezi in minte la plecarea spre destinatie si care depaseste asteptarile, e gustul cafelei
                savurate pe pontonul de la Dunare in diminetile magice de vacanta.
              E plimbarea de seara la varsarea Dunarii in Mare cand frumusetea naturii te face sa te simti mic dar fericit si privilegiat ca esti martorul unui asemenea apus.
              <i className='ghilimele-icon'><ImQuotesRight /></i>
            </p>
            <ul className='five-star'>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
        </ul>
        </div>
        </Carousel.Item>


    <Carousel.Item className='carousel-items'>
    <div className='line'></div>
    <div className='line'></div>
    <h1 className='carousel__title'>Ce spun oaspeții noștri</h1>
      <div className='carousel-elements'>
            <h5 className='person-name'>Alis</h5>
            <p className='carousel-p'>
              <i className='ghilimele-icon'><ImQuotesLeft /></i>
              Pentru a contribui la dragostea iremediabila pe care orice om o va dezvolta in momentul in care ajunge in Sulina, locul de cazare ideal este Casa Mihai. Buna dispozitie, curatenie, serviabilitate, capacitatea indiscutabila de pliere dupa placerea turistilor, indiferent de varsta.
              Pe langa toate atuurile necesare cazarii, colaborarea cu oameni de calitate pentru excursii.
              Ne va ramane in suflet pana anul viitor cand cu siguranta, vom reveni cu mare placere. 
                            <i className='ghilimele-icon'><ImQuotesRight /></i>
            </p>
            <ul className='five-star'>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
          <li className='star'><FaStar /></li>
        </ul>
        </div>
        </Carousel.Item>


  </Carousel>
)
}
export default Testimoniale;