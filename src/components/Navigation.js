import { useState } from "react";
import { Container, Nav, Navbar, Button, Offcanvas, Stack, Image } from "react-bootstrap";
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
                    <Image src={require("../images/jLogo.png")} className={styles.logo} />
                    <Button variant="light" onClick={handleShow}>
                        <i class="bi bi-grid-fill"></i>
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <h1 className={styles.title}>Resume</h1>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav>
                                <a className={styles.link} href='/aboutMe'> <i class="bi bi-person" style={{ 'padding-right': '10px' }}></i> About Me</a>
                                <a className={styles.link} href='/education'><i class="bi bi-book" style={{ 'padding-right': '10px' }}></i> Education</a>
                                <a className={styles.link} href='/experience'><i class="bi bi-briefcase" style={{ 'padding-right': '10px' }}></i> Experience</a>
                                <a className={styles.link} href='/skills'><i class="bi bi-code-slash" style={{ 'padding-right': '10px' }}></i> Skills</a>
                                <a className={styles.link} href='/interests'><i class="bi bi-camera-reels" style={{ 'padding-right': '10px' }}></i> Interests</a>
                                <a className={styles.link} href='/funFacts'><i class="bi bi-chat-square-quote" style={{ 'padding-right': '10px' }}></i> Fun Facts</a>
                            </Nav>
                        </Offcanvas.Body>
                        <a className={styles.link} href='/'><i class="bi bi-house-door" style={{ 'padding-left': '10px' }}></i></a>
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