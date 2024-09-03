
import '../styles/Header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/variables.scss';
import logo from'../assets/logo.png';
import { FaHome } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiFishing } from "react-icons/gi";
import { TbSpeedboat } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";



function Header(){
  return(

    <Navbar collapseOnSelect expand="md" className='p-0'>
    <Container className='nav-container' >
    <Navbar.Brand href='/'><img className='logo' alt='logo' src={logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav-links-collapse'>
        <Nav className="me-auto nav-links ">
        <Nav.Link
                href="/acasa"
                ><FaHome size={'0.8em'}/> Acasă
          </Nav.Link>
        <Nav.Link

                href="/camere"
                ><MdOutlineBedroomParent size={'1em'}/> Camere
        </Nav.Link>
        <Nav.Link

                href="/activitati">
                <GiFishing size={'1em'}/> Activitați
                </Nav.Link>
        <Nav.Link

                href="/transfer">
                <TbSpeedboat size={'1em'}/> Transfer
                </Nav.Link>
        <Nav.Link

                href="/contact">
                <FaPhoneAlt size={'0.8em'}/> Contact
          </Nav.Link>
      </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}
export default Header