import styles from "./Testimonials.module.css";
import {
  MdOutlineCamera,
  MdOutlineLibraryBooks,
  MdOutlineDevices,
} from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
export default function Testimonials() {

const arrayImage = [
  { url: "images/perfil1.jpg", name: "Maria Fernanda" },
  { url: "images/perfil2.jpg", name: "Gabriela Alencar" },
  { url: "images/perfil3.jpg", name: "Victoria Souza" },
  { url: "images/perfil4.jpg", name: "Alexa Shipt" },
  { url: "images/perfil5.jpg", name: "Beatriz Nevez" },
];
const [image, setImage] = useState(arrayImage);
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(count + 1);
const [count3, setCount3] = useState(count + 2);


  function generatorItems() {
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
        <div className={styles.slideText}>
          <h1>
            <FaQuoteLeft />
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatem, fugit?
          </p>
        </div>
        <div className={styles.perfil}>
          <div className={styles.perfil_img}>
            <img src={item.url} />
          </div>
          <div className={styles.perfil_info}>
            <h2>{item.name}</h2>
            <span>CEO AT WONDER WOMAN</span>
          </div>
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
    <main className={styles.testimonials_container}>
      <section className={styles.sectionOne}>
        <div className={styles.testimonials_title}>
          <h1>Testimonials</h1>
          <button>VIEW ALL</button>
        </div>
        <div className={styles.testimonials_commments}>
          <button onClick={right}>
            <MdKeyboardArrowLeft />
          </button>
          {generatorItems()}
          <button onClick={left}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.box1}>
          <div className={styles.box_svg}>
            <MdOutlineDevices />
          </div>
          <div className={styles.box_text}>
            <h1>Lorem Impsum</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ipsam animi molestiae corporis accusamus consectetur
              iusto neque maxime perferendis autem sed sunt doloremque natus,
              tempora, iste expedita ipsum ex ut.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.box_svg}>
            <MdOutlineLibraryBooks />
          </div>
          <div className={styles.box_text}>
            <h1>Lorem Impsum</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ipsam animi molestiae corporis accusamus consectetur
              iusto neque maxime perferendis autem sed sunt doloremque natus,
              tempora, iste expedita ipsum ex ut.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.box_svg}>
            <MdOutlineCamera />
          </div>
          <div className={styles.box_text}>
            <h1>Lorem Impsum</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ipsam animi molestiae corporis accusamus consectetur
              iusto neque maxime perferendis autem sed sunt doloremque natus,
              tempora, iste expedita ipsum ex ut.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </section>
    </main>
  );
}
