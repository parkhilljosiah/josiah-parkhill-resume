import styles from "../public/stylesheets/Experience.module.css";

function Experience() {
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

  function displayExperience({
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
      <p className={styles.heading}>experience.</p>
      <div className={styles.experienceContainer}>
        {displayExperience(paramount)}
      <div className={styles.divider}></div>
        {displayExperience(rottenApples)}
      </div>
    </>
  );
}

export default Experience;
