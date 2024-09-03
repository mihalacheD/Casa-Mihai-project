import ScrollToTop from "../Components/ScrollToTop.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../styles/Pages.scss';
import { IoFishOutline } from "react-icons/io5";

function Gastronomia(){
  return(
    <Container fluid>
    <Row>
      <Col className="titlu">
      <div className='line'></div>
      <div className='line'></div>
      <h1>Gastronomia din Delta Dunarii</h1>
      <p>
      Gastronomia din Delta Dunării oferă o experiență unică pentru cei care iubesc mâncarea și natura. 
      </p>
      </Col>
    </Row>
             {/*storceac*/}
    <Row className='pages-row'>
      <Col sm={12} md={12} lg={6} className='pages-col'>
      <h1 className='pages-title'>Storceac de sturion - regina ciorbelor</h1>
      <p className="text-left">
      <IoFishOutline className="content-icon"/>
          Storceacul de Sturion este un fel de mâncare ce își are
          originile din zona Sf. Gheorghe, o ciorbă de pește făcută
          cu carne de sturion si inventată de Hahuli, urmași ai cazacilor
          fugăriți de țarul Rusiei. Această ciorbă de pește cu multe
          legume, este incredibil de gustoasă. Sturionul fiind un pește
          prețios și rar întâlnit, iar această ciorbă a fost numită astfel
          datorită modului în care se prepară, în mod tradițional întru-un
          vas, oală din lut sau lut ars, care ajută la păstrarea aromelor
          și gusturilor.
        </p>
      </Col>
      <Col className='pages-img p-5'>
      <Image src='../src/assets/storceag.webp' fluid/>
      </Col>
    </Row>
             {/*Saramura de peste*/}
   <Row className='pages-row'>
      <Col className='pages-img p-5'>
          <Image src='../src/assets/saramura.jpg' fluid/>
      </Col>
      <Col sm={12} md={12} lg={6} className='pages-col'>
          <h1 className='pages-title'>Saramură de pește</h1>
          <p>
          <IoFishOutline className="content-icon"/>
              O străveche rețetă de pește din Delta Dunării a aprins
              imaginația și simțurile gustative ale oamenilor aflați în
              cele mai îndepărtate locuri ale lumii. Vorbim despre
               saramura de pește din Delta Dunării, coaptă la foc viu
               cu ardei iute din belșug și sare grunjoasă, servită cu un
               vin agreabil dar ferm.Un deliciu!
          </p>
      </Col>
    </Row>
             {/*plachie*/}
             <Row className='pages-row'>
      <Col sm={12} md={12} lg={6} className='pages-col'>
      <h1 className='pages-title'>Plachie de crap</h1>
      <p>
      <IoFishOutline className="content-icon"/>
        Plachia de pește este un preparat tradițional, pe care îl
        vei găsi peste tot în Deltă și în zona Dobrogei. Peștele proaspăt
        este un criteriu esențial pentru ca această rețetă să îți iasă
        delicioasă.Pe lângă pește, ceapa, usturoiul, roșiile sau sucul de
        roșii și neapărat vinul alb sau oțetul de vin sunt ingrediente care
        nu pot lipsi.
        </p>
      </Col>
      <Col className='pages-img p-5'>
      <Image src='../src/assets/plachie.jpg' fluid/>
      </Col>
    </Row>
           {/*ciorba de peste*/}
           <Row className='pages-row'>
      <Col className='pages-img p-5'>
          <Image src='../src/assets/ciorba.jpg' fluid/>
      </Col>
      <Col sm={12} md={12} lg={6} className='pages-col'>
          <h1 className='pages-title'>Ciorba de pește</h1>
          <p>
            <IoFishOutline className="content-icon"/>
            Cu preparare simplă și un gust deosebit,
            ciorba de pește dobrogeană va uimi pe toată lumea.
            Este absolut necesar să încerci această rețetă tradițională,
            care datează de peste 100 de ani. Peștele se servește pe un platou separat
            împreună cu cartofii și mujdeiul, iar la final ne delectăm cu un castron de 
            zeama gustoasă de pește.

          </p>
      </Col>
    </Row>
    <ScrollToTop/>
    </Container>
  )
}
export default Gastronomia;