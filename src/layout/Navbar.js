import React, { useEffect, useState, useRef } from 'react'
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// // import Image
// import logoLight from "../assets/images/logo-light.png";
// import logoDark from "../assets/images/logo-dark.png";

const Navbar1 = () => {

    const [activeItem, setActiveItem] = useState('Home');

    const [navClass, setnavClass] = useState("");


    // navbar Scroll

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    function scrollNavigation() {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("nav-sticky");
        } else {
            setnavClass("");
        }
    }

    // toggle

    const navMenuRef = useRef(null);

    const toggleNavMenu = () => {
        navMenuRef.current.classList.toggle('collapse');
    };


    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="61" data-bs-smooth-scroll="true" className="scrollspy-example-2">
            <nav className={`navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-light ${navClass}`}
                id="navbar">
                <Container fluid>
                    <Navbar.Brand href="index-1.html" className="logo text-uppercase">
                        <p>Mentaltext</p>
                    </Navbar.Brand>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavMenu}>
                        <span className="mdi mdi-menu"></span>
                    </button>

                    <div ref={navMenuRef} className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto" id="navbar-navlist">
                            <li className={activeItem === 'Home' ? 'active' : 'nav-item'} onClick={() => setActiveItem('Home')} >
                                <Nav.Link href="#home">Home</Nav.Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </div>
    )
}

export default Navbar1;

