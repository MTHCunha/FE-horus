import { Carousel } from "antd";
import style from "./styles.module.scss";

export const MainPageCarousel = () => {
  return (
    <>
      <Carousel
        className={style.Carrousel}
        autoplay={{ dotDuration: true }}
        autoplaySpeed={5000}
      >
        <div>
          <h3 className={style.imgCarrousel}>1</h3>
        </div>
        <div>
          <h3 className={style.imgCarrousel}>2</h3>
        </div>
        <div>
          <h3 className={style.imgCarrousel}>3</h3>
        </div>
        <div>
          <h3 className={style.imgCarrousel}>4</h3>
        </div>
      </Carousel>
      <div
        style={{
          display: "block",
          flex: 1,
          width: 100,
          height: 100,
          backgroundColor: "red",
        }}
      ></div>
    </>
  );
};
