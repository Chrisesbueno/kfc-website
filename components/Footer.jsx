import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { footer } from "../constants";

const Footer = () => {
  return (
    <div className="container section">
      <div className={styles.footer}>
        <Image src={footer.backImg} className={styles.backImg} />
        <div className={styles.top}>
          <div className={styles.company}>
            <h3>{footer.company.title}</h3>
            <div className={styles.content}>
              {footer.company.data.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
            </div>
          </div>
          <div className={styles.support}>
            <h3>{footer.support.title}</h3>
            <div className={styles.content}>
              {footer.support.data.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
            </div>
          </div>
          <div className={styles.stay}>
            <h3>{footer.stay.title}</h3>
            <input type="text" placeholder={footer.stay.email} />
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.left}>
            <p>{footer.author}</p>
          </div>
          <div className={styles.right}>
            <p>{footer.others}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
