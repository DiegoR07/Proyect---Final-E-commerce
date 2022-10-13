import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import Logo from '../assets/Logo.svg';
import './NavbarComponent.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavbarComponent = ({ results=[], search }) => {
    const [searchValue, setSearchValue] = useState();

    const handleSearchValue = (e) => {
        const {target: {value}} = e;
        setSearchValue(value.toLowerCase());
    };
    const submitSearch = (e) => {
        e.preventDefault();
        const resultado = results.filter(product => {
            const toSearch = product.product_name.toLowerCase(); 
            return toSearch == searchValue;
        });
        search(resultado);
        
    };

    return (
        <>
            <Navbar bg="dark" expand="lg" sticky="top">
                <Container className='fs-3'>
                    <h2 to="/home" className='fw-bold text-danger'>
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            e-shop
                    </h2>  
                    <Form className="d-flex form-inline mx-auto my-2">
                        <Form.Control
                            type="search"
                            placeholder="Que deseas buscar!"
                            
                            aria-label="Buscar"
                            name='Boton de Busqueda'
                            onChange={handleSearchValue}
                        />
                        <div class="Button">
                        <Button
                            style={{color: 'rgb(2, 254, 151 )'}}
                            onClick={(e) => {
                            submitSearch(e);
                                
                            }}
                        >Buscar</Button>
                        </div>
                    </Form>
                    <Nav className='justify-content-end fs-6'>
                        <Link to='/login' className='text-light'>Log in</Link>
                        <Link className="nav-link" to="/home">
                            <i className="bi bi-person-circle" style={{color: 'rgb(2, 254, 151 )'}}></i>             
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;