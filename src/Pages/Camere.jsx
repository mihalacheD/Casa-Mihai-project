import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { MdOutdoorGrill } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa6";
import  '../Components/Testimoniale';
import Testimoniale from '../Components/Testimoniale';


function Camere(){



  return(
    <Container fluid >
        {/*titlu */}
    <Row className='mt-4'>
    <Col className="titlu">
        <div className='line'></div>
        <div className='line'></div>
        <h1>Servicii si facilități</h1>
    </Col>
    </Row>
      {/*facilitati si servicii*/}
    <Row className="content col-sm-12">
         <Col>

          <div className='d-flex align-items-baseline'>
              <span><MdOutlineBedroomParent  className='content-icon'/></span>
              <li className='content-services'>
                Fiecare dormitor este dotat cu un pat comfortabil,Televizor cu recepție canale TV, WiFi, dulap garderoba.
              </li>
          </div>

          <div className='d-flex align-items-baseline '>
              <span><MdOutlineBathroom  className='content-icon'/></span>
              <li className='content-services'>
                Baie privata dotata cu cabină de duș, prosoape, articole de toaletă.
              </li>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><TbAirConditioning  className='content-icon'/></span>
              <li className='content-services'>
              Aparat aer conditionat, plasă de țanțari, prize lângă pat.
              </li>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><MdOutlineCoffeeMaker className='content-icon'/></span>
              <li className='content-services'>
                Bucătarie dotată cu aparat cafea, cuptor, minibar, frigider,etc.
              </li>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><MdOutdoorGrill className='content-icon'/></span>
              <li className='content-services' >
              Gradină, lounge comun, terasă, grătar.
              </li>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><FaUmbrellaBeach className='content-icon'/></span>
              <li className='content-services'>
                Ponton privat, șezlonguri, umbrele de plajă.
              </li>
          </div>
        </Col>
      </Row>
     {/*titlu */}
      <Row className='mt-4'>
      <Col className="titlu">
        <div className='line'></div>
        <div className='line'></div>
        <h1>Camere</h1>
    </Col>
    </Row>
    {/*carousel image */}
    <Row style={{ textShadow:'2px 2px 3px rgb(28, 25, 25)' }}>
        <Col style={{ border:'1em solid white' }} sm={12} md={6} className='p-5'>
        <Carousel>
      <Carousel.Item interval={1000}>
        <Image src='../src/assets/camera-double1.jpg' fluid/>
        <Carousel.Caption>
          <h1>Cameră dublă</h1>
          <p>Preț/noapte începe de la 200 RON</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src='../src/assets/camera-double2.jpg' fluid />
        <Carousel.Caption>
        <h1>Cameră dublă</h1>
        <p>Preț/noapte începe de la 200 RON</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='../src/assets/camera-double3.jpg' fluid />
        <Carousel.Caption>
        <h1>Cameră dublă</h1>
        <p>Preț/noapte începe de la 200 RON</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image src='../src/assets/camera-double4.jpg' fluid/>
        <Carousel.Caption>
          <h1>Cameră dublă</h1>
          <p>Preț/noapte începe de la 200 RON</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src='../src/assets/camera-double5.jpg' fluid />
        <Carousel.Caption>
        <h1>Cameră dublă</h1>
        <p>Preț/noapte începe de la 200 RON</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>


        <Col style={{ border:'1em solid white' }} sm={12} md={6} className='p-5'>
        <Carousel>
      <Carousel.Item interval={1000}>
        <Image src='../src/assets/camera-deluxe1.jpg' fluid/>
        <Carousel.Caption>
          <h1>Camera deluxe</h1>
          <p>Preț/noapte începe de la 300 RON</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src='../src/assets/camera-deluxe2.jpg' fluid/>
        <Carousel.Caption>
        <h1>Camera deluxe</h1>
        <p>Preț/noapte începe de la 300 RON</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='../src/assets/camera-deluxe3.jpg' fluid/>
        <Carousel.Caption>
        <h1>Camera deluxe</h1>
        <p>Preț/noapte începe de la 300 RON</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
    </Row>

    {/*testimoniale*/}
    <Row>
      <Testimoniale/>
    </Row>
    </Container>
  )
}
export default Camere