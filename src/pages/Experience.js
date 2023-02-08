import styles from "../public/stylesheets/Experience.module.css";

function Experience() {
  let finalProject = {
    name: "Bethel Tech Final Project",
    title: "Donut Car Shop Application",
    startDate: "November 2022",
    endDate: "February 2023",
    task: "Created both a frontend and backend application that is used for easily buying and selling vehicles using the MERN stack alongside a team of developers. ",
    link: "https://github.com/bethel-school-of-technology/team-manthano-frontend",
  };

  let aws = {
    name: "Bethel Tech Final Project",
    title: "Donut Car Shop Application",
    startDate: "September 2022",
    endDate: "October 2022",
    task: "Studied cloud computing and possible architecture provided by AWS, and became familiarized with Amazon EC2 instances, Amazon S3 buckets, Amazon DynamoDB, Amazon RDS, etc.",
    link: "https://www.credly.com/badges/56602b75-2578-4312-8e75-1e61eb804b2b/linked_in_profile",
  };

  let rottenApples = {
    name: "Rotten Apples Repair",
    location: "Cranberry, Pennsylvania",
    title: "Customer Service Representative",
    startDate: "August 2021",
    endDate: "February 2022",
    tasks: [
      "Implemented an automated customer-contact system which improved productivity by 66%",
      "Co-developer of customer service videos, which automated and streamlined customer experience",
      "Strategically resolved customer conflict, providing customer retention",
    ],
  };

  let paramount = {
    name: "Paramount Senior Living",
    location: "McMurray, Pennsylvania",
    title: "Administrative Assistant",
    startDate: "August 2022",
    endDate: "Current",
    tasks: [
      "Worked directly with healthcare software, guarenteeing patient information is secure and correctly logged",
      "Ensured that computers and other pieces of technology were functional and efficient",
      "Developed an input system for patient documents that increased production",
    ],
  };

  function displayTechExperience({
    name,
    title,
    startDate,
    endDate,
    task,
    link,
  }) {
    return (
      <div className={styles.jobContainer}>
        <h2 className={`${styles.jobHeading} ${styles.jobTitle}`}>{title}</h2>
        <h3 className={`${styles.jobHeading} ${styles.jobName}`}>{name}</h3>
        <h5 className={styles.duration}>
          {startDate} | {endDate}
        </h5>
        <h6 className={styles.task}>{task}</h6>
        <a href={link} target="_blank" className={styles.link}>Check It Out</a>
      </div>
    );
  }

  function displayWorkExperience({
    name,
    location,
    title,
    startDate,
    endDate,
    tasks,
  }) {
    return (
      <div className={styles.jobContainer}>
        <h2 className={`${styles.jobHeading} ${styles.jobTitle}`}>{title}</h2>
        <h3 className={`${styles.jobHeading} ${styles.jobName}`}>{name}</h3>
        <h4 className={styles.location}>{location}</h4>
        <h5 className={styles.duration}>
          {startDate} | {endDate}
        </h5>
        {tasks.map((t) => {
          return <h6 className={styles.task}>{t}</h6>;
        })}
      </div>
    );
  }

  return (
    <>
      <p className={styles.heading}>tech experience.</p>
      {displayTechExperience(finalProject)}
      <div className={styles.divider}></div>
      {displayTechExperience(aws)}
      <p className={styles.heading}>work experience.</p>
      <div className={styles.experienceContainer}>
        {displayWorkExperience(paramount)}
        <div className={styles.divider}></div>
        {displayWorkExperience(rottenApples)}
      </div>
    </>
  );
}

export default Experience;
