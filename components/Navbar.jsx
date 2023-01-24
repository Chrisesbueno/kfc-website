import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { navbar } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container section">
      <div className={styles.navbar}>
        <div className={styles.left}>
          <Image src={navbar.logo} alt=''/>
        </div>
        <div className={styles.right}>
          <div className={styles.menu}>
            {navbar.menu.map((item) => (
              <Link href={`${item.id}`} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className={styles.buttons}>
            {navbar.buttons.map((item) => (
              <Link href="/" key={item.id}>
                <i className={item.icon}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Navbar;
