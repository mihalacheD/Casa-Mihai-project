import '../styles/MainSection.scss';
import '../styles/variables.scss';
import '../styles/Cards.scss';
import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/delta.jpg';
import img2 from '../assets/welcome.jpg';
import img3 from '../assets/terasa.jpg';


function MainSection(){

  return(
    <Carousel
            fade data-bs-ride="carousel"
            interval="3000"
            className='carousel-div '
            >
    <Carousel.Item >
    <img src={img} alt='img' className='carousel-img'></img>
      <Carousel.Caption>
        <h1 className='carousel--title'>Delta Dunarii</h1>
        <p className='carousel--description'>O oază de liniște!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={img2} alt='img' className='carousel-img'></img>
      <Carousel.Caption>
        <h1 className='carousel--title'>Casa Mihai</h1>
        <p className='carousel--description' >Locul in care te deconectezi!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={img3} alt='img' className='carousel-img'></img>
      <Carousel.Caption>
        <h1 className='carousel--title'>Terasă open-space</h1>
        <p className='carousel--description'>Locul de relaxare!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
export default MainSection