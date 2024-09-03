import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Transfer(){
  return(
    <Container fluid >

    {/*titlu */}
<Row className='mt-4'>
<Col className="titlu">
    <div className='line'></div>
    <div className='line'></div>
    <h1>Parcare și transfer</h1>
</Col>
</Row>
   {/*parcare*/}
<Row className="transfer-row">
<Col className='pages-col'>
            <h1 className='pages-title'>Parcare</h1>
            <p>Când ajungeți în Tulcea este necesar să vă parcați mașina într-un loc sigur și să
              vă îmbarcați în una din mijloacele de transport pe apa.Puteti parca autoturismul in parcarea pazita din Tulcea Portaval (Str. Intrarea Marmurei nr. 3), pretul fiind de 30 ron / zi
            </p>
            <p style={{fontSize: "0.75em"}}>*vă putem îndruma</p>
        </Col>


<Row className="transfer-row"></Row>
  <Col className='pages-col'>
            <h1 className='pages-title'>Transfer</h1>
            <p>Transportul din Tulcea se realizeaza pe Dunare cu ambarcatiuni rapide (100lei / 1.5h)
               sau cu nava clasica (60lei / 4h)/catamaran (60lei / 2.45h) Navrom cu plecare de pe faleza  Dunarii.
               Imbarcarea se face cu 15 minute inainte de ora plecarii.

            </p>
            <p style={{fontSize: "0.75em"}}>*vă putem îndruma</p>
  </Col>
</Row>
     {/*poze transport */}
     <Row>
     <Col style={{ border:'1em solid white' }} sm={12} md={12} lg={6} className='p-5 m-auto'>
        <Carousel>
      <Carousel.Item interval={1000}>
        <Image src='../src/assets/barca-rapida.webp' fluid/>
        <Carousel.Caption>
          <h1>Ambarcațiune rapidă</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src='../src/assets/catamaran.jpg' fluid/>
        <Carousel.Caption>
        <h1>Catamaran</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='../src/assets/vapor.jpg' fluid/>
        <Carousel.Caption>
        <h1>Nava clasică</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
     </Row>

  </Container>
  )
}
export default Transfer;