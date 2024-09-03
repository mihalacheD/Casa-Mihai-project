import ScrollToTop from "../Components/ScrollToTop.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../styles/Pages.scss';
import { TbMap2 } from "react-icons/tb";
import { BsClockHistory } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";

function Excursii(){
  return(
    <Container fluid>
    <Row>
      <Col className="titlu">
      <div className='line'></div>
      <div className='line'></div>
      <h1>Excursii și trasee</h1>
      </Col>
    </Row>
             {/*Letea*/}
    <Row className='pages-row'>
      <Col sm={12} md={12} lg={6} className='pages-col'>
      <h1 className='pages-title'>Excursie la padurea Letea – safari pe traseu</h1>
      <p className="text-left">
      <LuMapPin className="content-icon"/>
      Pădurea Letea este o destinația inedită. Este o arie protejată de interes național  și este cea mai veche rezervație naturală din România.
     <br className="mb-3"/>
     <TbMap2 className="content-icon"/> canalul Cardon – canalul Barbosu – canalul Musura – canalul cu Ciulini – traversarea golfului Musura – canalul Cpages
     <br className="mb-3"/>
     <BsClockHistory className="content-icon"/> 8 h. Plecare ora 8:00
        </p>
      </Col>
      <Col className='pages-img p-5'>
      <Image src='../src/assets/letea.jpeg' fluid/>
      </Col>
    </Row>
             {/*gura de vrasare*/}
   <Row className='pages-row'>
      <Col className='pages-img p-5'>
          <Image src='../src/assets/far2.jpg' fluid/>
      </Col>
      <Col sm={12} md={12} lg={6} className='pages-col'>
          <h1 className='pages-title'>Excursie Gura de vărsare a Dunarii in Marea Neagra</h1>
          <p><LuMapPin className="content-icon"/>
            Imaginile pe care Dunărea le face la vărsarea în Marea Neagră sunt fascinante. Culori diferite se amestecă şi totuşi fiecare îşi păstrează autonomia.
            <br className="mb-3"/>
            <TbMap2 className="content-icon"/> Sulina – farul vechi – farul nou – gura de varsare a Dunarii in Marea Neagra – insula cu pasari – golful Musura
            <br className="mb-3"/>
            <BsClockHistory className="content-icon"/> 2,30 h. Plecare ora 19:00
          </p>
      </Col>
    </Row>
             {/*mila 23*/}
             <Row className='pages-row'>
      <Col sm={12} md={12} lg={6} className='pages-col'>
      <h1 className='pages-title'>Excursie Mila 23</h1>
      <p><LuMapPin className="content-icon"/>
        Explorează frumusețea pitorească a Mila 23! Natura neatinsă, peisaj fascinant te așteaptă în Delta Dunării. Descoperă minunățiile ascunse!
        <br className="mb-3"/>
        <TbMap2 className="content-icon"/> Sulina – Lacul Rosulet – Lacul Rosu – canal Balanova – Lacul Balnova – canal cordon litoral – Brat Sf Gheorghe – Sat Sf Gheorghe – canal Cordon Litoral
        <br className="mb-3"/>
        <BsClockHistory className="content-icon"/>  8-9 h. Plecare ora 8:00
        </p>
      </Col>
      <Col className='pages-img p-5'>
      <Image src='../src/assets/mila23.jpg' fluid/>
      </Col>
    </Row>
           {/*sf gheorghe*/}
           <Row className='pages-row'>
      <Col className='pages-img p-5'>
          <Image src='../src/assets/sfgheorghe.jpg' fluid/>
      </Col>
      <Col sm={12} md={12} lg={6} className='pages-col'>
          <h1 className='pages-title'>Excursie la Sf. Gheorghe (traseu scurt)</h1>
          <p><LuMapPin className="content-icon"/>
            Sfantul Gheorghe un traditional sat haholesc de la marginea Deltei Dunarii este alegerea ideala pentru cei care vor sa descopere cea mai frumoasa plaja salbatica.
            <br className="mb-3"/>
            <TbMap2 className="content-icon"/> Sulina – Lacul Rosulet – Lacul Rosu – canal Balanova – Lacul Balnova – canal cordon litoral – Brat Sf Gheorghe – Sat Sf Gheorghe – canal Cordon Litoral
            <br className="mb-3"/>
            <BsClockHistory className="content-icon"/>  8 h. Plecare ora 8:00
          </p>
      </Col>
    </Row>
    <ScrollToTop/>
  </Container>
  )
}
export default Excursii;