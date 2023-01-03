import { Image } from "react-bootstrap";
import styles from "../public/stylesheets/HomePage.module.css";

function HomePage() {
    return (
        <>
            <div className={styles.background}>
                <div>
                    <h1 className={styles.text}>JOSIAH PARKHILL
                        <div><h3>WEB DEVELOPER</h3></div>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default HomePage;