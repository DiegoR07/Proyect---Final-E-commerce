import React from 'react';
import { Container, Navbar, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" sticky="top">
                <Container>
                    <h2 to="/home" className='fw-bold text-danger'>
                        <img
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                            E-shop
                    </h2>   
                </Container>
            </Navbar>
            <Container className='container-error px-20 mt-5 mb-30'>
                <Card className='card-error'>
                    <Card.Title><h1 className='fw-bold' style={{fontSize: '25px'}}>Esta paginna no funciona </h1></Card.Title>
                    <Card.Body>
                        <p>
                            O la pagina que intentas buscar no existe 
                        </p>
                        <p></p>
                        
                        <button><h1><Link to="/home">Vuelve a la pagina principal</Link></h1></button>
                    </Card.Body>
                </Card>
            </Container>
            <Navbar bg="dark" expand="lg" fixed="bottom">
                <Container>
                    <Navbar.Brand className='fw-bold text-secondary'>
                    <p>Contacta a soporte tecnico o envia un correo al resposable de la pagina</p>
                    </Navbar.Brand> 
                </Container> 
            </Navbar>
        </>
    );
};

export default ErrorPage;