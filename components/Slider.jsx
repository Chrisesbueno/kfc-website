import styles from "../styles/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { combos, order } from "../constants";
import { useCombo } from "../context/ComboContext";
import Link from "next/link";

const Slider = () => {
  const { updateCombo, isActive } = useCombo()
  return (
    <div className="container section_two container_order">
      <div className={styles.order}>
        <Link href={`/${order.card.link}`}>{order.card.title}</Link>
      </div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={7}
        loop={true}
        simulateTouch={true}
        grabCursor={true}
        pagination={{ dynamicBullets: true }}
        navigation={true}
        className={styles.slider}
      >
        {combos.map((combo) => (
          <SwiperSlide
            key={combo.id}
            className={styles.combo}
            onClick={() => {
              updateCombo({...combo})
            }}
          >
            {combo.id === isActive.id ? (
              <div className={styles.active}>
                <Image src={combo.image} alt="" />
                <p>{combo.title}</p>
              </div>
            ) : (
              <div>
                <Image src={combo.image} alt="" />
                <p>{combo.title}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
