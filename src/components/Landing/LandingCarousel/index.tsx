import React from "react";
import { Carousel } from "antd";
import CarouselContent from "./CarouselContent";
import team from "@/assets/team.png";
import eye from "@/assets/eye.png";
import cefsa from "@/assets/CEFSA.jpg";
import professional from "@/assets/professional.png";
import { Typography, Button } from "@mui/material";
import style from "./style.module.scss";
import { Link } from "@tanstack/react-router";

const LandingCarousel = () => {
  return (
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={6088800}>
      <CarouselContent backgroundImage={team}>
        <Typography
          sx={{
            marginTop: "8rem",
            fontSize: "3rem",
            lineHeight: "3.5rem",
            textWrap: "wrap",
            fontWeight: "bolder",
            fontFamily: "sans-serif",
            textAlign: "start",
            width: "29rem",
            textTransform: "uppercase",
          }}
        >
          Conheça nosso time
        </Typography>
        <Button component={Link} to="/aboutUs" className={style.aboutUsButton}>
          About Us
        </Button>
      </CarouselContent>
      <CarouselContent backgroundImage={eye}>Teste2</CarouselContent>
      <CarouselContent backgroundImage={cefsa}>Tesrte3</CarouselContent>
      <CarouselContent backgroundImage={professional}>Teste4</CarouselContent>
    </Carousel>
  );
};

export default LandingCarousel;
