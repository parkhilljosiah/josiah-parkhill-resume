import Container from 'react-bootstrap/Container';
import styles from '../public/stylesheets/Footer.module.css';

const Footer = () => {

    return (
        <div className="footer-copyright text-center py-3">
            <Container className={styles.footer} fluid>
                <h1 className={styles.footer}> josiah parkhill
                &copy; 2000 Copyright
                </h1>
            </Container>
        </div>
    )
}

export default Footer;