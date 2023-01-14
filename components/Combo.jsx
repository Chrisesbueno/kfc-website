import { useCombo } from "../context/ComboContext";
import Image from "next/image";
import styles from "../styles/Combo.module.css";
import { Circle } from "../public";

const Combo = () => {
  const { isActive } = useCombo();

  return (
    <div className="container section">
      <div className={styles.combo}>
        <div className={styles.left}>
          <h1>{isActive.title} MENU</h1>
          <p>{isActive.description}</p>
          <input type="button" value="ORDER NOW" />
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <Image src={isActive.image} alt="" />
          </div>
          <div className={styles.border}>
            <div className={styles.price}>
              <p>
                {isActive.price}
                <span>.99$</span>
              </p>
            </div>
          </div>
          <div className={styles.light}></div>
        </div>
        <div className={styles.circles}>
          <Image src={Circle} alt='' className={styles.circle1}/>
          <Image src={Circle} alt='' className={styles.circle2}/>
          <Image src={Circle} alt='' className={styles.circle3}/>
        </div>
      </div>
    </div>
  );
};

export default Combo;
