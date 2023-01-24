import styles from "../styles/Screen.module.css";
import Image from "next/image";
import { screens } from "../constants";

const Screens = () => {
  return (
    <div className="container section">
        <div className={styles.screens}>
            <div className={styles.left}>
              <Image src={screens.main} alt=''/>
            </div>
            <div className={styles.right}>
                <h1>{screens.title}</h1>
                <div className={styles.apps}>
                  <Image src={screens.google} alt='' />
                  <Image src={screens.apple} alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Screens