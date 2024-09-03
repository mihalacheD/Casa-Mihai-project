import ScrollToTop from "../Components/ScrollToTop.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { TbBrandBooking } from "react-icons/tb";
import '../styles/Pages.scss';


function Contact(){


  return(
    <Container fluid>
    {/*titlu */}
    <Row className='mt-4'>
        <Col className="titlu">
            <div className='line'></div>
            <div className='line'></div>
            <h1>Contactați-ne</h1>
        </Col>
    </Row>

    <Row className="content col-sm-12">
         <Col className="d-flex flex-column contact-col">

          <div className='d-flex align-items-baseline'>
              <span><FaPhone  className='content-icon'/></span>
              <a href="tel:+40746450190" className='contact-link'>
                +40 744 124 203
              </a>
          </div>

          <div className='d-flex align-items-baseline '>
              <span><FaWhatsapp className='content-icon'/></span>
              <a href="https://wa.me/+40744124203" target="_blank" className='contact-link'>
                +40 744 124 203
              </a>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><MdOutlineEmail className='content-icon'/></span>
              <a href="mailto:casamihaisulina@yahoo.com" target="_blank" className='contact-link'>
              casamihaisulina@yahoo.com
              </a>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><FiMapPin className='content-icon'/></span>
              <a href="https://maps.app.goo.gl/oTgLm8DJstkbdU5E6" target="_blank" className='contact-link'>
              strada 1, nr. 55, 800395 Sulina, Sulina, Romania
              </a>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><FaFacebook className='content-icon'/></span>
              <a href="https://www.facebook.com/casamihaisulina/?locale=ro_RO" target="_blank" className='contact-link' >
              Casa Mihai
              </a>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><LuInstagram className='content-icon'/></span>
              <a href="https://www.instagram.com/casamihaisulina?igsh=YzF0bzZ0bzAzMmdn" target="_blank"  className='contact-link'>
              Casa Mihai
              </a>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><TbBrandBooking className='content-icon'/></span>
              <a href="https://www.booking.com/hotel/ro/casa-mihai-sulina.ro.html#policies" target="_blank" className='contact-link'>
              Casa Mihai
              </a>
          </div>
        </Col>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1406.7062380559137!2d29.62146613491821!3d45.15849665422503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b9bb3a47e11e25%3A0xc37a1528a4f667!2sCasa%20Mihai!5e0!3m2!1sro!2sus!4v1719238497151!5m2!1sro!2sus" className="map" ></iframe>
        <Col>
        </Col>
      </Row>

    <ScrollToTop/>
    </Container>
  )
}
export default Contact;