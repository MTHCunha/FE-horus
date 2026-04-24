import { Carousel } from "antd";
import CarouselContent from "./CarouselContent";
import team from "@/assets/team.png";
import eye from "@/assets/eye.png";
import professional from "@/assets/professional.png";
import Content from "./Content";

const LandingCarousel = () => {
  return (
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={4000}>
      <CarouselContent backgroundImage={team}>
        <Content
          buttonText="About Us"
          typographyText="Conheça nosso time"
          typographyWidth="29rem"
          to="/aboutUs"
        />
      </CarouselContent>
      <CarouselContent backgroundImage={eye}>
        <Content
          buttonText="Referencial Teórico"
          typographyText="Confira nosso referencial teórico"
          typographyWidth="59rem"
          to=""
        />
      </CarouselContent>
      <CarouselContent backgroundImage={professional}>
        <Content
          buttonText="Projeto"
          typographyText="Entenda sobre o projeto"
          typographyWidth="39rem"
          to=""
        />
      </CarouselContent>
    </Carousel>
  );
};

export default LandingCarousel;
