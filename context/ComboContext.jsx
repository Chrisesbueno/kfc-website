import { createContext, useContext, useEffect, useState } from "react";
import { combos } from "../constants";

export const ComboContext = createContext();

export const useCombo = () => useContext(ComboContext);

export const ComboProvider = ({ children }) => {
  const [isActive, setIsActive] = useState({});
  const [extra, setExtra] = useState(0);
  const [order, setOrder] = useState([{}]);
  const updateCombo = (combo = combos[2]) =>
    setIsActive({
      id: combo.id,
      image: combo.image,
      title: combo.title,
      price: combo.price,
      description: combo.description,
    });
  const updateExtra = (action) => setExtra(action);
  const updateOrder = (action) => setOrder([...order, {
    id: action.id,
    title: action.title,
    price: action.price,
    quantity: action.quantity
  }]);
  useEffect(() => {
    updateCombo();
    // updateOrder();
  }, []);

  return (
    <ComboContext.Provider
      value={{ updateCombo, isActive, extra, updateExtra, updateOrder, order }}
    >
      {children}
    </ComboContext.Provider>
  );
};
