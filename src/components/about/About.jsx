import styles from "./About.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

export default function About() {
  const arrayImage = [
    { url: "images/woman11.jpg", name: "Maria Fernanda" },
    { url: "images/woman2.jpg", name: "Gabriela Alencar" },
    { url: "images/woman31.jpg", name: "Victoria Souza" },
    { url: "images/woman4.jpg", name: "Alexa Shipt" },
    { url: "images/woman5.jpg", name: "Beatriz Nevez" },
  ];
  const [image, setImage] = useState(arrayImage);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(count + 1);
  const [count3, setCount3] = useState(count + 2);


  function carro() {
    return image.map((item, i) => (
      <div
        key={i}
        id={i}
        className={
          i === count || i === count2 || i === count3
            ? styles.active
            : styles.nada
        }
      >
        <img src={item.url} alt="My Awesome Image" />
        <div className={styles.slideText}>
          <h1>{item.name}</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          <span>Learn more</span>
        </div>
      </div>
    ));
  }
  function left(e) {
    if (count < 2) {
      setCount(count + 1);
      setCount2(count + 2);
      setCount3(count + 3);
      return;
    } else {
      e.preventDefault();
      //   setCount(0)
      // setCount2(1)
      // setCount3(2)
    }
  }
  function right(e) {
    if (count < 3 && count > 0) {
      setCount(count - 1);
      setCount2(count2 - 1);
      setCount3(count3 - 1);
      return;
    } else {
      e.preventDefault();
      // setCount(0);
      // setCount2(1);
      // setCount3(2);
    }
  }
  return (
    <section className={styles.about_container}>
      <div className={styles.about_img}>
        <img src="images/group1.jpg" alt="My Awesome Image" />
      </div>
      <div className={styles.about_info}>
        <span id="about">ABOUT US</span>
        <h1>Wonder Woman.</h1>
        <p>
          lorem lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Iste est reiciendis officia aspernatur ex fugit, cupiditate ipsum
          quibusdam nobis, aliquid minus! Eligendi, recusandae. Inventore,
          eligendi odio dolores beatae ipsum vitae? Lorem ipsum dolor sit, amet
        </p>
        <button>LEARN MORE</button>
      </div>

      <div className={styles.illustrators_info}>
        <span id="illustrators">OUR</span>
        <h1>Illustrators</h1>
        <p>
          lorem lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Iste est reiciendis officia aspernatur ex fugit, cupiditate ipsum
          quibusdam nobis, aliquid minus! Eligendi, recusandae. Inventore,
          eligendi odio dolores beatae ipsum vitae? Lorem ipsum dolor sit, amet
        </p>
      </div>
      <div className={styles.illustrators_banner}></div>
      <div className={styles.illustrator_box}>
        <div className={styles.perfil_btn}>
          <button onClick={left}>
            <MdKeyboardArrowLeft />
          </button>
          <button onClick={right}>
            <MdKeyboardArrowRight />
          </button>
        </div>

        <div className={styles.illustrator_perfil}>{carro()}</div>
      </div>
    </section>
  );
}
