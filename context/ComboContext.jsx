import { createContext, useContext, useEffect, useState } from "react";
import { combos } from "../constants";

export const ComboContext = createContext();

export const useCombo = () => useContext(ComboContext);

export const ComboProvider = ({ children }) => {
  const [isActive, setIsActive] = useState({});

  const updateCombo = (combo=combos[3]) =>
    setIsActive({
      id: combo.id,
      image: combo.image,
      title: combo.title,
      price: combo.price,
      description: combo.description,
    });
    useEffect(() => {
      updateCombo()
    },[]);
  return (
    <ComboContext.Provider value={{ updateCombo, isActive }}>
      {children}
    </ComboContext.Provider>
  );
};
