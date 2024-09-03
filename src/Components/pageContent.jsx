import '../styles/PageContent.scss';
import Card from './Card';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import CardInfo from '../Pages/CardInfo.jsx';
import image from '../assets/terasa-t.jpg';
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { GiFishing } from "react-icons/gi";
import { GiBoatFishing } from "react-icons/gi";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function PageContent () {

const[cardDetails] = useState(CardInfo)

const cardElements = cardDetails.map((e) => {
  return(
    <div key={e.id} className='col-xs-12 col-sm-6 col-lg-3 pb-4'>
    <Card
        image={e.image}
        title={e.title}
        content={e.content}
        pathname={e.pathname}
        />
     </div>
  )
}
)

  return(
  <Container className="container-fluid p-5 text-center">
    <div className="titlu">
        <h3 className='services'>Servicii</h3>
        <div className='line'></div>
        <div className='line'></div>
        <h1>Casa Mihai vă oferă</h1>
    </div>

    <Row className="content col-sm-12">
        <Col xxl={6}>

          <div className='d-flex align-items-baseline'>
              <span><MdOutlineBedroomParent  className='content-icon'/></span>
              <li className='content-services'>
                camere cu baie proprie, televizor si aer conditionat.
              </li>
          </div>

          <div className='d-flex align-items-baseline '>
              <span><MdOutlineOutdoorGrill className='content-icon'/></span>
              <li className='content-services'>
                grătar, terasă acoperită unde se poate servi masa
              </li>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><FaKitchenSet className='content-icon'/></span>
              <li className='content-services'>
              acces in bucatarie complet utilată
              </li>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><FaWifi className='content-icon'/></span>
              <li className='content-services'>
                acces gratuit la conexiune wireless
              </li>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><GiFishing className='content-icon'/></span>
              <li className='content-services' >
              partide de pescuit pe malul Dunarii, care este situat in fața casei.
              </li>
          </div>

          <div className='d-flex align-items-baseline'>
              <span><GiBoatFishing className='content-icon'/></span>
              <li className='content-services'>
                la cerere ne ocupam și cu organizarea excursiilor in Delta Dunarii.
              </li>
          </div>

        </Col>

        <Col xll={6} className='img-content p-5'>
            <Image fluid src={image}></Image>
        </Col>
      </Row>

      <div className='row justify-content-around '>
        {cardElements}
      </div>

    </Container>
  )
}
export default PageContent