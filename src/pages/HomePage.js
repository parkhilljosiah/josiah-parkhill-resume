import styles from "../public/stylesheets/HomePage.module.css";

function HomePage() {
    return (
        <>
            <div className={styles.background}>
                <div>
                    <h1 className={styles.text}>Josiah Parkhill
                        <div><h4>WEB DEVELOPER</h4></div>
                    </h1>
                </div>
            </div>
            <div>
                <h1 className={styles.heading}>contact me.</h1>
                <div className={styles.container}>
                    <a href="mailto: parkhilljosiah@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contact}>email</a>
                    <a href="tel: +17249864622" target="_blank" rel="noopener noreferrer" className={styles.contact}>phone</a>
                    <a href="https://www.linkedin.com/in/josiah-parkhill-6800481b8/" target="_blank" rel="noopener noreferrer" className={styles.contact}>linkedin</a>
                    <a href="https://github.com/parkhilljosiah" target="_blank" rel="noopener noreferrer" className={styles.contact}>github</a>
                </div>
            </div>
        </>
    )
}

export default HomePage;