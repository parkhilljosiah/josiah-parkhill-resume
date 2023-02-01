import { Image } from "react-bootstrap";
import josiahPhoto from "../public/images/josiahPhoto.jpeg";
import styles from "../public/stylesheets/AboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.aboutContainer}>
      <Image className={styles.aboutImg} src={josiahPhoto}></Image>
      <div className={styles.textContainer}>
      <p className={styles.heading}>about me.</p>
        <p className={styles.aboutText}>
          Hello World! My name is Josiah Parkhill and I am a web developer who
          currently lives in Pittsburgh, Pennsylvania.
          I have developed a passion for coding in React, formulating responsive
          and attractive web pages. I love life and enjoy making coding fun! I
          hope you find this webpage informative and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
