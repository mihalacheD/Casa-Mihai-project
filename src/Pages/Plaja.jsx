import ScrollToTop from "../Components/ScrollToTop.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Pages.scss';
import Image from 'react-bootstrap/Image';
import { MdOutlineBeachAccess } from "react-icons/md";

function Plaja(){
  return(
    <Container fluid>
    <Row>
      <Col className="titlu">
      <div className='line'></div>
      <div className='line'></div>
      <h1>Plaja Sulina</h1>
      <p className="text-center">
      Locul unde Dunarea se iubeste cu marea!
      </p>
      </Col>
    </Row>
             {/*plaja*/}
    <Row className='pages-row'>
      <Col sm={12} md={12} lg={6} className='pages-col'>
      <h1 className='pages-title'>Istoria plajei</h1>
      <p className="text-left">
      <MdOutlineBeachAccess className="content-icon"/>
      Plaja Sulina are o istorie indelungata si interesanta. Pana la sfarsitul
       secolului al XIX-lea, Sulina era principalul port din Delta Dunarii,
        unde mii de nave transportau marfuri intre Marea Neagra si Europa Centrala.
         In aceasta perioada, plaja Sulina era adesea frecventata de catre marinari.
          In timpul verii, oamenii se adunau aici pentru a se bucura de soare si de
           apa racoritoare.
        </p>
      </Col>
      <Col className='pages-img p-5'>
      <Image src='../src/assets/plaja5.jpeg' fluid/>
      </Col>
    </Row>
             {/*plaja*/}
   <Row className='pages-row'>
      <Col className='pages-img p-5'>
          <Image src='../src/assets/plaja4.jpg' fluid/>
      </Col>
      <Col sm={12} md={12} lg={6} className='pages-col'>
          <h1 className='pages-title'>Plaja astazi</h1>
          <p>
          <MdOutlineBeachAccess className="content-icon"/>
          Astazi, plaja Sulina este o destinatie populara pentru turisti
           care cauta sa fuga de agitatia vietii cotidiene. Aici, vei gasi
            o oaza de liniste si relaxare, departe de zgomotul si poluarea
             oraselor. Cu nisipul sau fin, apa cristalina si privelistile
              pitoresti ale Deltei Dunarii, plaja Sulina este un adevarat
               paradis natural.
          </p>
      </Col>
    </Row>
             {/*plaja*/}
             <Row className='pages-row'>
      <Col sm={12} md={12} lg={6} className='pages-col'>
      <h1 className='pages-title'>Cum ajungi?</h1>
      <p>
      <MdOutlineBeachAccess className="content-icon"/>
      Plaja Sulina este situată la aproximativ 3 kilometri de oraș.Se poate ajunge
      pe jos in 30-40 de minute sau cu microbuz/taxi. Pe plaja gasim câteva beach-baruri,
      o zonă unde poți închiria șezlonguri și locuri unde poți mânca cea mai buna hamsie!
        </p>
      </Col>
      <Col className='pages-img p-5'>
      <Image src='../src/assets/plaja3.jpg' fluid/>
      </Col>
    </Row>
           {/*plaja*/}
           <Row className='pages-row'>
      <Col className='pages-img p-5'>
          <Image src='../src/assets/volbura.jpg' fluid/>
      </Col>
      <Col sm={12} md={12} lg={6} className='pages-col'>
          <h1 className='pages-title'>De ce este specială?</h1>
          <p>
          <MdOutlineBeachAccess className="content-icon"/>
          Se spune despre nisipul de pe plaja din Sulina că e bun de clepsidră,
          iar noi confirmăm că așa este! Datorită nisipului aici crește o plantă rară
          aflată pe lista roșie a speciilor protejate : Volbura de nisip. 
          </p>
      </Col>
    </Row>
    <ScrollToTop/>
    </Container>
  )
}
export default Plaja;