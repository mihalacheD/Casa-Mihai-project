/* eslint-disable react/prop-types */
import '../styles/variables.scss';
import '../Pages/CardInfo.jsx';
import '../styles/Cards.scss';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';





function Cards (props) {
  return(
     <Card className='card border-0 mt-5'>
      <Card.Body className = "div-card">
          <Card.Img  className='img' src={props.image}></Card.Img>
            <div className="card-content">
              <Card.Title className='card-title'>{props.title}</Card.Title>
              <Card.Text className='content'>
                  {props.content}
              </Card.Text>
              <Link to={props.pathname} className="button">
                  Mai multe detalii
                  <span className="material-symbols-outlined">
                  <LiaLongArrowAltRightSolid />
                  </span>
              </Link>
            </div>
        </Card.Body>
      </Card>
      )
    }
      export default Cards;