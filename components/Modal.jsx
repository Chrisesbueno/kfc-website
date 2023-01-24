import { Dialog } from "@headlessui/react";
import { useCombo } from "../context/ComboContext";
import styles from "../styles/Modal.module.css";
import Image from "next/image";
import Panel from "./Panel";
import { extras } from "../constants";
import { useRef, useState } from "react";

export function Modal({ onClose = () => {} }) {
  const overlayRef = useRef();
  const { isActive } = useCombo();
  const { extra } = useCombo();
  const [comboOrder, setComboOrder] = useState(0);

  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className={styles.modal}
    >
      <Dialog.Overlay ref={overlayRef} className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.combo}>
          <div className={styles.left}>
            <h1>{isActive.title} MENU</h1>
            <Image src={isActive.image} alt="" />
            <div className={styles.controls}>
              <button
                onClick={() => {
                  if (comboOrder === 0) return;
                  setComboOrder(comboOrder - 1);
                }}
              >
                -
              </button>
              <input type="text" value={comboOrder} disabled />
              <button
                onClick={() => {
                  if (comboOrder === 10) return;
                  setComboOrder(comboOrder + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.mainContent}>
              <h1>{isActive.price}$</h1>
              <h4>DESCRIPTION</h4>
              <p>{isActive.description}</p>
            </div>
            <div className={styles.extras}>
              <h4>
                {extras.title} ({extra}/{extras.limit})
              </h4>
              {extras.data.map((item) => (
                <Panel limit={extras.limit} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.panel}>
          <button>ADD TO CARD</button>
        </div>
      </div>
    </Dialog>
  );
}
