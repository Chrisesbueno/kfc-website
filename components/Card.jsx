import Image from "next/image";
import { Tag } from "../public";
import styles from "../styles/Card.module.css";

const Card = ({
  title,
  name,
  price,
  image,
  color = "",
  rotate = "",
  tag = "",
}) => {
  return (
    <>
      {color === "inverse" ? (
        <div className={styles.state}>
          <div className={styles.card}>
            <div className={styles.left}>
              <h2>{title}</h2>
              <p>{name}</p>
              {rotate === "rotate" ? (
                <div className={styles.rotate}>
                  <p>$<span>{price} NOW!</span></p>
                </div>
              ) : (
                <div className={styles.normal}>
                  <p>${price} NOW!</p>
                </div>
              )}
            </div>
            {tag === "down" ? (
              <div className={styles.down}>
                <div className={styles.right}>
                  {tag === "new" ? (
                    <div className={styles.back}>
                      <Image src={image} alt="" className={styles.image} />
                      <Image src={Tag} alt="" className={styles.tag} />
                    </div>
                  ) : (
                    <div className={styles.back}>
                      <Image src={image} alt="" className={styles.image} />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className={styles.right}>
                {tag === "new" ? (
                  <div className={styles.back}>
                    <Image src={image} alt="" className={styles.image} />
                    <Image src={Tag} alt="" className={styles.tag} />
                  </div>
                ) : (
                  <div className={styles.back}>
                    <Image src={image} alt="" className={styles.image} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.card}>
          <div className={styles.left}>
            <h2>{title}</h2>
            <p>{name}</p>
            {rotate === "rotate" ? (
              <div className={styles.rotate}>
                <p>$<span>{price} NOW!</span></p>
              </div>
            ) : (
              <div className={styles.normal}>
                <p>${price} NOW!</p>
              </div>
            )}
          </div>
          {tag === "down" ? (
              <div className={styles.down}>
                <div className={styles.right}>
                  {tag === "new" ? (
                    <div className={styles.back}>
                      <Image src={image} alt="" className={styles.image} />
                      <Image src={Tag} alt="" className={styles.tag} />
                    </div>
                  ) : (
                    <div className={styles.back}>
                      <Image src={image} alt="" className={styles.image} />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className={styles.right}>
                {tag === "new" ? (
                  <div className={styles.back}>
                    <Image src={image} alt="" className={styles.image} />
                    <Image src={Tag} alt="" className={styles.tag} />
                  </div>
                ) : (
                  <div className={styles.back}>
                    <Image src={image} alt="" className={styles.image} />
                  </div>
                )}
              </div>
            )}
        </div>
      )}
    </>
  );
};

export default Card;
