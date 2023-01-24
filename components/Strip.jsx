import styles from '../styles/Strip.module.css'
import Image from "next/image";
import { strip } from '../constants';

const Strip = () => {
  return (
    <div className="container section">
      <div className={styles.strip}>
        <Image src={strip.logo} alt='' className={styles.logo} />
        <div className={styles.whatsapp}>
            <i className={strip.whatsapp.icon}></i>
            <p>{strip.whatsapp.number}</p>
        </div>
        <div className={styles.phone}>
            <i className={strip.phone.icon}></i>
            <p>{strip.phone.number}</p>
        </div>
        <div className={styles.social}>
            {strip.social.map((item) => (
                <i className={item.icon} key={item.id}></i>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Strip;
