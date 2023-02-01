import { Image } from "react-bootstrap";
import styles from "../public/stylesheets/Education.module.css";

function Education() {
  let oralRoberts = {
    name: "Oral Roberts University",
    length: "3 years",
    specialty: "Biblical Literature",
    graduationDate: "May 2021",
    imgString:
      "https://upload.wikimedia.org/wikipedia/en/c/c7/Oral_Roberts_seal.png",
  };

  let bethelTech = {
    name: "Bethel School of Technology",
    length: "9 months",
    specialty: "Full Stack Web Development",
    graduationDate: "January 2023",
    imgString:
      "https://media.licdn.com/dms/image/C510BAQGeiw5pRGbNTQ/company-logo_200_200/0/1519906106772?e=2147483647&v=beta&t=yYcuG1cJIqXaNq7sAH87afXw5KAoYXVr0WQewGezEcw",
  };

  function displayEducation({
    name,
    length,
    specialty,
    graduationDate,
    imgString,
  }) {
    return (
      <div className={styles.schoolContainer}>
        <Image className={styles.schoolImg} src={imgString}></Image>
        <h2 className={styles.schoolName}>{name}</h2>
        <h4 className={styles.specialty}>{specialty}</h4>
        <h5>
          {length} | {graduationDate}
        </h5>
      </div>
    );
  }

  return (
    <>
      <h1 className={styles.heading}>education.</h1>
      <div className={styles.educationContainer}>
        {displayEducation(bethelTech)}
        {displayEducation(oralRoberts)}
      </div>
    </>
  );
}

export default Education;
