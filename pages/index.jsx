import {
  Combo,
  Footer,
  Navbar,
  Offers,
  Screens,
  Slider,
  Social,
  Strip,
} from "../components";
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
      <div className={styles.screens}>
        <Screens />
      </div>
      <div className={styles.social}>
        <Social />
      </div>
      <div className={styles.strip}>
        <Strip />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
