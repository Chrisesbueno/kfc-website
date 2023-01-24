import { useCombo } from "../context/ComboContext";
import Image from "next/image";

const Modal2 = () => {
  const { isActive } = useCombo();

  return (
    <div>
      <div>
          <Image src={isActive.image} alt='' />
      </div>
    </div>
  )
}

export default Modal2
