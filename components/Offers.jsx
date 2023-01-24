import styles from "../styles/Offers.module.css";
import Image from "next/image";
import { BackPage } from "../public";
import { cards } from "../constants";
import Card from "./Card";

const Offers = () => {
  return (
    <div className={styles.offers}>
      <Image src={BackPage} alt="" className={styles.backpage} />
      <div className="container section">
        <div className={styles.content}>
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              name={card.name}
              price={card.price}
              image={card.image}
              color={card?.color}
              rotate={card?.rotate}
              tag={card?.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
