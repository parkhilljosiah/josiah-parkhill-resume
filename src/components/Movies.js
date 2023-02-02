import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "../public/stylesheets/Interests.module.css";

function Movies() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let movieFranchies = {
    starWars: {
      name: "Star Wars",
      imgString:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/maxresdefault-13.jpg?auto=format&q=60&fit=max&w=930",
    },
    lotr: {
      name: "Lord of the Rings",
      imgString:
        "https://middleearthnews.com/wp-content/uploads/2013/02/Untitled-2.jpg",
    },
    marvel: {
      name: "Marvel",
      imgString:
        "https://d23.com/app/uploads/2022/08/1180w-600h_080222_marvel-d23-expo_00.jpg",
    },
    theDarkKnight: {
      name: "The Dark Knight Trilogy",
      imgString:
        "https://maroonersrock.com/wp-content/uploads/2015/10/Dark-Knight-Trilogy-logo.jpg",
    },
  };

  function displayMovies({ name, imgString }) {
    return (
      <Carousel.Item>
        <img className={styles.carouselImg} src={imgString} alt={name} />
        <Carousel.Caption>
          <h1 className={styles.carouselCaption}>{name}</h1>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  function movieCarousel() {
    return (
      <Carousel
        variant="dark"
        className={styles.carousel}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {displayMovies(movieFranchies.starWars)}
        {displayMovies(movieFranchies.lotr)}
        {displayMovies(movieFranchies.marvel)}
        {displayMovies(movieFranchies.theDarkKnight)}
      </Carousel>
    );
  }

  return (
    <>
      <p className={styles.header}>movies.</p>
      {movieCarousel()}
      <h3 className={styles.text}>
        Movies are the vehicle which brings magic to the viewer. I have always
        been mezmorized by "movie magic." From the galactic adventures in Star
        Wars, to the fantastical journey of Frodo Baggins out of the Shire,
        movies awaken creativity and wonder in my mind and heart. This wonder
        translates to my code as it allows me to think outside the confines of
        the box that human natures constructs, creating a magical experience
        with every line of code. Above are some of the franchises that helped to
        develop this creativity within me.
      </h3>
    </>
  );
}

export default Movies;
