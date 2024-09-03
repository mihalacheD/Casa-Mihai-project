import ScrollToTop from "../Components/ScrollToTop.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Pages.scss';
import Image from 'react-bootstrap/Image';
import { PiBuildingApartmentThin } from "react-icons/pi";
import { PiChurchLight } from "react-icons/pi";
import { TbBeachOff } from "react-icons/tb";
import { GiPirateFlag } from "react-icons/gi";


function Obiective(){
  return(
    <Container fluid>
    <Row>
      <Col className="titlu">
      <div className='line'></div>
      <div className='line'></div>
      <h1>Obiective turistice</h1>
      <p className="text-center">
      Descoperă locuri minunate și încărcate de istorie!
      </p>
      </Col>
    </Row>
             {/*palatul comisiei si farurile*/}
    <Row className='pages-row'>
      <Col sm={12} md={12} lg={6} className='pages-col'>
      <h1 className='pages-title'>Palatul Comisiunii Europene și farurile</h1>
      <p className="text-left">
      <PiBuildingApartmentThin className="content-icon"/>
      Palatul Comisiunii Europene a Dunării este o clădire impunătoare care
      surprinde și astăzi. A fost construit în perioada 1856-1858 și a găzduit
      Comisiunea până în anul 1921 când a intrat în administrarea statului
      român.
      <br/>
      Ne uimește măreția farurilor ce au vegheat de-a lungul timpului corăbiile și vapoarele.
      Aici trebuie menționat, în primul rând, Farul vechi, care astăzi este un
      muzeu. Construit în 1840-1841, farul are o înălțime de 17,34 de metri,
      și găzduiește acum camera de lucru a lui Jean Bart (Eugeniu Botez) și o
      sală-muzeu dedicată Comisiunii Europene a Dunării.
        </p>
      </Col>
      <Col className='pages-img p-5'>
      <Image src='../src/assets/palatul.jpg' fluid/>
      </Col>
    </Row>
             {/*bisericile*/}
   <Row className='pages-row'>
      <Col className='pages-img p-5'>
          <Image src='../src/assets/biserica.jpg' fluid/>
      </Col>
      <Col sm={12} md={12} lg={6} className='pages-col'>
          <h1 className='pages-title'>Bisericile Sulinei, închinate ocrotitorului marinarilor</h1>
          <p>
          <PiChurchLight className="content-icon"/>
          Orașul Sulina te invită să-i vizitezi și locașurile de cult ridicate
          în cinstea Sfântului Nicolae, cel considerat ocrotitorul marinarilor.
          În 1868 se ridică biserica Sfântul Nicolae, la numai cinci ani de la
          sfințirea (1863) bisericii romano-catolice cu același hram,
          construcție ridicată cu osteneala comunității italiene din oraș.
          Piatra de Malta s-a îmbinat cu cărămida, iar o parte dintre
          vitraliile pe care turiștii le pot vedea azi sunt originale.
          Construcția locașului de cult s-a bucurat și de sprijinul Regelui
           Carol I, iar Familia Regală participă la punerea pietrei de temelie
           a „Catedralei Deltei” în anul 1910.
          </p>
      </Col>
    </Row>
             {/*plaja*/}
             <Row className='pages-row'>
      <Col sm={12} md={12} lg={6} className='pages-col'>
      <h1 className='pages-title'>Plaja și excursiile în Deltă</h1>
      <p>
      <TbBeachOff className="content-icon"/>
      Plaja Sulina este situată la aproximativ 3 kilometri de oraș,
       fiind locul unde te poți întinde la soare pe cel mai fin nisip de pe
       tot litoralul românesc. Apa mării este ideală pentru familiile cu copii,
        adâncimea apei fiind mică.Doritorii de excursii în Delta Dunării au
         posibilitatea de a pleca din Sulina către unele dintre cele mai
          frumoase zone ale Rezervației. Amintim aici Golful Musura, Mila 23,
           Crișan, lacul Roșu, canalul Cardon, Periprava.
        </p>
      </Col>
      <Col className='pages-img p-5'>
      <Image src='../src/assets/plaja3.jpg' fluid/>
      </Col>
    </Row>
           {/*cimitirul*/}
           <Row className='pages-row'>
      <Col className='pages-img p-5'>
          <Image src='../src/assets/cimitirul.jpg' fluid/>
      </Col>
      <Col sm={12} md={12} lg={6} className='pages-col'>
          <h1 className='pages-title'>Cimitirul cosmopolit al orașului</h1>
          <p>
          <GiPirateFlag className="content-icon"/>
          O lume cu totul și cu totul deosebită se deschide când pătrunzi în
           cimitirul cosmopolit al orașului. Aici își dorm somnul de veci prinți
            și prințese, marinari din toată lumea, căpitani de vase, ingineri
             sau industriași. Tineri sau bătrâni, și-au găsit odihna în pământul
              dintre Dunăre și Marea Neagră, iar monumentele funerare spun
               povestea fiecăruia.Unic în România, cimitirul din Sulina
                adăpostește singurul mormânt din țara noastră al unui pirat.
                 Ghiorghios Kontoguris, născut în Kefalonia, are inscripţionat
                  pe piatra funerară simbolul piraţilor: craniul cu două oase
                   încrucișate.
          </p>
      </Col>
    </Row>
    <ScrollToTop/>
    </Container>
  )
}
export default Obiective;