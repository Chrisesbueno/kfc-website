import { Combo, Navbar, Offers, Slider } from "../components";
import { useCombo } from "../context/ComboContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <Navbar />
        <Combo />
      </div>
      <div className={styles.combos}>
        <Slider />
      </div>
      <Offers />
    </div>
  );
}
