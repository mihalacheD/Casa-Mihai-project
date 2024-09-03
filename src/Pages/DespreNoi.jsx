import ScrollToTop from "../Components/ScrollToTop.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Pages.scss';
import Testimoniale from '../Components/Testimoniale';
import { FaArrowRight } from "react-icons/fa6";


function DespreNoi(){
  return(
    <Container fluid>
              {/*titlu */}
    <Row className='mt-4'>
    <Col className="titlu">
        <div className='line'></div>
        <div className='line'></div>
        <h1>Despre noi</h1>
    </Col>
    </Row>
             {/*despre noi */}
      <Row className="despre-row">
        <Col className="despre-col">
        <p>
        <FaArrowRight className="content-icon"/>
          Amplasata pe malul Dunarii, Casa Mihai ofera 30
          de locuri de cazare repartizate in 10 camere, 8 cu pat
          matrimonial sau twin si 2 triple . Toate spatiile de cazare dispun
          de confort omologat , 3 margarete. Fiecare camera are baie proprie,
          aer conditionat, TV cablu , protectie impotriva
          insectelor.
        </p>
        <p>
        <FaArrowRight className="content-icon"/>
          Pensiunea dispune de terasa exterioara acoperita, gratar si bucatarie exterioara,
           zona de luat masa, lounge, ponton privat.
        </p>
        <p>
        <FaArrowRight className="content-icon"/>
        Metode de plată acceptate: numerar, card, transfer bancar, vouchere, carduri de vacanță.
        Avans la rezervări: da, returnabil dacă rezervarea este anulată cu 14 zile înainte.
        </p>
        <p>
        <FaArrowRight className="content-icon"/>
        Acceptăm copii de toate vârstele.
        Copiii până la vârsta de 6 ani (inclusiv) care dorm în pat cu părinții beneficiază de gratuitate.
        Copiii între 7 și 17 ani (inclusiv) beneficiază de cazare în schimbul unui tarif de 50 ron/noapte.
        </p>
        </Col>
      </Row>
          {/*testimoniale*/}
    <Row>
      <Testimoniale/>
    </Row>
    <ScrollToTop/>
    </Container>
  )
}
export default DespreNoi