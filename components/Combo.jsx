import { useCombo } from "../context/ComboContext";
import Image from "next/image";
import styles from "../styles/Combo.module.css";
import { Circle } from "../public";
import { useRouter } from "next/router";
// import Modal from "./Modal";
import Link from "next/link";
import { Modal } from "./Modal";

const Combo = () => {
  const { isActive } = useCombo();
  const router = useRouter();
  return (
    <div className="container section container_order">
      {router.query.modal && (
        <Modal
          onClose={() => {
            router.push("/");
          }}
        >
          <Image src={isActive.image} />
        </Modal>
      )}

      <div className={styles.combo}>
        <div className={styles.left}>
          <h1>{isActive.title} MENU</h1>
          <p>{isActive.description}</p>
          <Link href={`/?modal=${isActive.id}`} as={`/${isActive.id}`} legacyBehavior>
            <a>ORDER NOW</a>
          </Link>
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
          <Image src={Circle} alt="" className={styles.circle1} />
          <Image src={Circle} alt="" className={styles.circle2} />
          <Image src={Circle} alt="" className={styles.circle3} />
        </div>
      </div>
    </div>
  );
};

export default Combo;
