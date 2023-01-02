import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from '../assets/img/ak.svg';
import navIcon1 from '../assets/img/linkedin-5.svg';
import navIcon2 from '../assets/img/github-1.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const updateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt='Logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active-navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('experiences')}>Experiences</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/amir-kemal-a9232516b/">
                                    <img src={navIcon1} alt="" />
                                </a>
                                <a href="https://github.com/amirnksb">
                                    <img src={navIcon2} alt="" />
                                </a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd">
                                    <span> Let's Connect</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}