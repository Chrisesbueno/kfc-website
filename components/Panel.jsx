import { useRef, useState } from "react";
import { useCombo } from "../context/ComboContext";
import styles from "../styles/Panel.module.css";

const Panel = ({ limit, title, price, id }) => {
  const { updateExtra, extra,updateOrder } = useCombo();
  const [quantity, setQuantity] = useState(0);
  const handleAdd = (action, state) => {
    if (extra === limit) return;
    action(state + 1);
  };
  const handleSrt = (action, state) => {
    if (quantity === 0) return;
    if (state > 0) action(state - 1);
  };
  const total = useRef(0);
  return (
    <div className={styles.panel}>
      <p>
        {title} <span>(+ ${price})</span>
      </p>
      <div>
        <button
          onClick={() => {
            handleSrt(updateExtra, extra);
            handleSrt(setQuantity, quantity);
            updateOrder({id: id, title: title, price: price, quantity: quantity})
          }}
        >
          -
        </button>
        <input type="text" value={quantity} disabled ref={total} />
        <button
          onClick={() => {
            handleAdd(updateExtra, extra);
            handleAdd(setQuantity, quantity);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Panel;
