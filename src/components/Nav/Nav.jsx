import { Navbar, Nav } from 'react-bootstrap';
import logo from './sugarlogo.png';
import './Nav.css';

function Nav_() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className="navBar">
            <Navbar.Brand href="/" className="logoContainer">
                <img src={logo} className="logoImg" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto navLinks">
                    <Nav.Link href="#" className="mr-3">Cadastrar Pix</Nav.Link>
                    <Nav.Link href="#" className="mr-3">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="#">
                        Sobre
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav_;