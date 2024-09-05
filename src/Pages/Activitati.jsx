import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../styles/Pages.scss';
import far from '../assets/far.jpg';
import plaja from '../assets/plaja2.jpg';
import pescuit from '../assets/pescuit.jpg';
import catedrala from '../assets/catedrala.jpg';

function Activitati(){

  return(
    <Container fluid>
      <Row>
        <Col className="titlu">
        <div className='line'></div>
        <div className='line'></div>
        <h1>Activitați și obiective turistice</h1>
        </Col>
      </Row>
               {/*excursii*/}
      <Row className='pages-row'>
        <Col sm={12} md={12} lg={6} className='pages-col'>
        <h1 className='pages-title'>Excursii in Delta Dunarii</h1>
        <p>Fiecare excursie în Delta Dunarii este de neuitat.
          Plimbare cu barca la vărsarea Dunarii în Marea Neagră,
          excursie la padurea Letea, plimbare pe lacul Roșu sunt doar cateva dintre traseele propuse.
          </p>
        </Col>
        <Col className='pages-img p-5'>
        <Image src= {far} fluid/>
        </Col>
      </Row>
               {/*plaja*/}
     <Row className='pages-row'>
        <Col className='pages-img p-5'>
            <Image src= {plaja} fluid/>
        </Col>
        <Col sm={12} md={12} lg={6} className='pages-col'>
            <h1 className='pages-title'>Plaja Sulina</h1>
            <p>Bucurați-vă de cel mai fin nisip de pe litoral,
              unde apa mării este limpede și mică, ideală pentru familii cu copii.
              Din loc în loc plaja este brăzdată de Volbura de nisip, o plantă foarte rară.
            </p>
        </Col>
      </Row>
               {/*pescuit*/}
               <Row className='pages-row'>
        <Col sm={12} md={12} lg={6} className='pages-col'>
        <h1 className='pages-title'>Partide de pescuit</h1>
        <p>Vă puteți încerca norocul la șalau sau la somn chiar de pe pontonul din fața pensiunii.
          La cerere organizăm partide de pescuit pe lacurile din apropiere de unde puteți admira specii rare de păsări.
          </p>
        </Col>
        <Col className='pages-img p-5'>
        <Image src={pescuit}  fluid/>
        </Col>
      </Row>
             {/*obiective*/}
             <Row className='pages-row'>
        <Col className='pages-img p-5'>
            <Image src={catedrala}  fluid/>
        </Col>
        <Col sm={12} md={12} lg={6} className='pages-col'>
            <h1 className='pages-title'>Obiective turistice</h1>
            <p>În timp ce vă plimbați pe faleză nu puteți rata Catedrala,
              Palatul Comisiei Europene, Farul Comsiei Europene, Expoziția Sulina Veche, Cimitirul Cosmopolit, care vă va uimi cu povești fabuloase.
            </p>
        </Col>
      </Row>
    </Container>
  )
}
export default Activitati