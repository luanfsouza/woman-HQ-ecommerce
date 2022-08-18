import { useState } from "react";
import styles from "./Products.module.css";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineShoppingCart,
} from "react-icons/md";


const image1 = "images/hq1.jpg";
const image2 = "images/hq2.jpg";
const image3 = "images/hq3.jpg";
const image4 = "images/hq4.jpg";
const image5 = "images/hq5.jpg";
const image6 = "images/hq6.jpg";

export default function Products() {
  const arrayImage = [
    { url: "images/hq1.jpg", name: "Wonder Woman" },
    { url: "images/hq3.jpg", name: "Captain Marvel" },
    { url: "images/hq4.jpg", name: "Thor" },

    { url: "images/hq5.jpg", name: "She Hulk" },
    { url: "images/hq7.jpg", name: "Super Girl" },

    { url: "images/hq6.jpg", name: "Wanda Vision" },
    { url: "images/hq2.jpg", name: "Captain Marvel" },
  ];
  const [image, setImage] = useState(arrayImage);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(count + 1);
  const [count3, setCount3] = useState(count + 2);
  console.log(count, count2, count3);
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
        <div className={styles.slideImg}>
          <div className={styles.shadow}>
            <img src={item.url} alt="My Awesome Image" />
            <div className={styles.shadow1}></div>
            <div className={styles.shadow2}></div>
          </div>
        </div>

        <div className={styles.slideText}>
          <h5 className={styles.type}>COMIC BOOK</h5>
          <h1>{item.name}</h1>
          <p>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur. </p>
          <span className={styles.price}>$35.50</span>
          <button>
            <MdOutlineShoppingCart /> ADD TO CART
          </button>
        </div>
      </div>
    ));
  }
  function left(e) {
    if (count < 4) {
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
    if (count < 5 && count > 0) {
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
    <div className={styles.products_container}>
      <div className={styles.products_box}>
        <div className={styles.box1}></div>
        <div className={styles.box2}></div>
      </div>
      <main>
        <h1 className={styles.products_title}>Our Products</h1>
        <ul>
          <li>MARVEL</li>
          <li>DC COMICS</li>
          <li>IMAGE COMICS</li>
          <li>DARK HOUSE</li>
          <li>ASPEN COMICS</li>
        </ul>
        <div className={styles.products_items}>{generatorItems()}</div>
        <div className={styles.products_btn}>
          <button onClick={right}>
            <MdKeyboardArrowLeft />
          </button>
          <button onClick={left}>
            <MdKeyboardArrowRight />
          </button>
        </div>
       
      </main>
    </div>
  );
}
