import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import '../Pages/AcordDate';
import { Link } from "react-router-dom";
import '../styles/variables.scss';
import '../styles/Footer.scss';
import logo from '../assets/logo.png';
import anpc from'../assets/anpc.svg';
import solutionare from'../assets/solutionare.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer(){
  return(
    <Container fluid className="footer">

      <Row className="footer-info">
      <div className='line-light'></div>
      <div className='line-light mb-3'></div>

      <Col sm={12} md={6} lg={3} className="logo-footer">
          <img src={logo} className="w-50"></img>
          <h1 className='display-3'>Casa Mihai Delta Dunarii Sulina</h1>
        </Col>

      <Col sm={12} md={6} lg={3} className="utile">
          <h1 className="display-3 pb-3">Linkuri utile</h1>
          <Link className='link-utile' to='/despreNoi'>Despre noi</Link>
          <Link className='link-utile' to='/contact'>Contact</Link>
          <Link className='link-utile' to='/galerie'>Galerie</Link>
        </Col>

      <Col sm={12} md={6} lg={3} className="social-media ">
        <h1 className="display-3 pb-3">Social media</h1>
          <Link
                className="button-social-media"
                to="https://www.facebook.com/casamihaisulina/?locale=ro_RO"
                target="_blank"
                ><FaFacebook /></Link>
          <Link
                className="button-social-media"
                to="https://www.instagram.com/casamihaisulina?igsh=YzF0bzZ0bzAzMmdn"
                target="_blank"
                ><FaInstagram /></Link>
          <Link
                className="button-social-media"
                to="https://www.booking.com/hotel/ro/casa-mihai-sulina.ro.html"
                target="_blank"
                ><TbBrandBooking /></Link>
        </Col>


      <Col s={12} md={6} lg={3} className="note">
      <h1 className="display-3 pb-3">Linkuri de interes</h1>
        <Link className='link-utile' to='/acord'>Termeni si condiții</Link>
        <Link className='link-utile' to='/nota'>Nota de informare prelucrare date</Link>
        <Link className='link-utile' to='/politica'>Politica de confidențialitate</Link>
        </Col>
    </Row>

    <Row className="pb-5">
      <Col>
      <Link
           to='https://anpc.ro/ce-este-sal/'
           target="_blank">
           <img src={anpc} className="litigii"></img></Link>
      <Link
            to='https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO'
            target="_blank">
            <img src={solutionare} className="litigii"></img></Link>
      <div className="copyright">&copy;2024 Casa Mihai</div>
      </Col>
    </Row>


    </Container>
  )
}

export default Footer