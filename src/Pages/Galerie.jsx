import ScrollToTop from "../Components/ScrollToTop.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Pages.scss';
import Image from 'react-bootstrap/Image';
import { useState} from 'react';
import '../Pages/GalerieData.jsx';
import GalerieData from "../Pages/GalerieData.jsx";



function Galerie(){

  const [picture] = useState(GalerieData)
  const [isShown, setIsShown] = useState({id: null, status: false});

    const pictures = picture.map((p, index) => {
     return (
      <Col
          key={p.id}
          style={{ border:'1em solid white'}}
          sm={12} md={6} lg={4} className='p-2 galerie-col'
          >
      <Image
          src={p.picture}
          thumbnail
          onMouseOver={() => setIsShown({id: index, status : !isShown.status})}
          />
        {isShown.status && p.id === isShown.id ?
            <p className="galerie-p">{p.title}</p>
         :
          ""}

      </Col>
    )
    })


  return(
<Container fluid >

<Row className='mt-4'>
    <Col className="titlu">
        <div className='line'></div>
        <div className='line'></div>
        <h1>Galerie foto</h1>
    </Col>
    </Row>

    <Row className="mx-5">
     {pictures}
    </Row>
    <ScrollToTop/>
    </Container>
  )
}
export default Galerie;