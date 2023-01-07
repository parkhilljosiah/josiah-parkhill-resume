import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../public/stylesheets/NotFound.module.css';

function NotFound() {

    let navigate = useNavigate();

    return (
        <>
            <h1 className={styles.fourohfour}>404</h1>
            <div className={styles.gifContainer}>
                <img className={styles.gif} src='https://media.tenor.com/tIs0vjSqRgIAAAAM/cat-kinkytwt.gif'></img>
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.text}>oh my... you have found the golden '404'</h3>
                <h3 className={styles.text}>
                   return your prize back home below <br />
                    <i class="bi bi-caret-down-fill"></i>
                </h3>
                <button
                    onClick={() => navigate("/")}
                    className={styles.button}>click here
                </button>
            </div>
        </>
    )
}

export default NotFound;