import { ListGroup, ListGroupItem } from "react-bootstrap";
import styles from "../public/stylesheets/Interests.module.css";

function Hobbies() {
  let hobbies = {
    music: ["guitar", "piano", "singing"],
    sports: ["football", "basketball", "soccer/football", "hockey"],
    videoGames: [
      "Call of Duty: Warzone",
      "Jedi Fallen Order",
      "Playstation's Spiderman",
    ],
    books: ["The Bible", "Star Wars: High Republic", "Dune"],
  };

  function displayHobbies(arr) {
    return arr.map((i) => {
      return <ListGroupItem>{i}</ListGroupItem>;
    });
  }

  return (
    <>
      <p className={styles.header}>music.</p>
      <ListGroup className={styles.listGroup}>{displayHobbies(hobbies.music)}</ListGroup>
      <p className={styles.header}>sports.</p>
      <ListGroup className={styles.listGroup}>{displayHobbies(hobbies.sports)}</ListGroup>
      <p className={styles.header}>video games.</p>
      <ListGroup className={styles.listGroup}>{displayHobbies(hobbies.videoGames)}</ListGroup>
      <p className={styles.header}>books.</p>
      <ListGroup className={styles.listGroup}>{displayHobbies(hobbies.books)}</ListGroup>
    </>
  );
}

export default Hobbies;
