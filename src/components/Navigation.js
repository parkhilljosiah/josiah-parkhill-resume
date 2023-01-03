import { useState } from "react";
import { Container, Nav, Navbar, Button, Offcanvas, Stack, NavbarBrand } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styles from '../public/stylesheets/Navigation.module.css';


function Navigation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <h1 className={styles.brand}>Josiah Parkhill</h1>
                    <Button variant="light" onClick={handleShow}>
                        <i class="bi bi-grid-fill"></i>
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <h1 className={styles.title}>Resume</h1>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav>
                                <a className={styles.link} href='/education'><i class="bi bi-book" style={{'padding-right': '10px'}}></i> Education</a>
                                <a className={styles.link} href='/experience'><i class="bi bi-briefcase" style={{'padding-right': '10px'}}></i> Experience</a>
                                <a className={styles.link} href='/skills'><i class="bi bi-code-slash" style={{'padding-right': '10px'}}></i> Skills</a>
                                <a className={styles.link} href='/interests'><i class="bi bi-camera-reels" style={{'padding-right': '10px'}}></i> Interests</a>
                                <a className={styles.link} href='/funFacts'><i class="bi bi-chat-square-quote" style={{'padding-right': '10px'}}></i> Fun Facts</a>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
            <Stack>
                <Outlet />
            </Stack>
        </>
    )
}

export default Navigation;