import { Button, Stack } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "../public/stylesheets/Interests.module.css";

function Interests() {
  let navigate = useNavigate();

  return (
    <>
      <p className={styles.heading}>interests.</p>
      <div className={styles.buttonDiv}>
        <Button
          className={styles.button}
          onClick={() => navigate("/interests/movies")}
        >
          movies.
        </Button>
        <Button
          className={styles.button}
          onClick={() => navigate("/interests/hobbies")}
        >
          hobbies.
        </Button>
      </div>
      <Stack>
        <Outlet />
      </Stack>
    </>
  );
}

export default Interests;
