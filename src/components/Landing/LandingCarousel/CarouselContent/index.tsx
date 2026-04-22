import type React from "react";
import { Box } from "@mui/material";

type CarouselContentProps = {
  children: React.ReactNode;
  backgroundImage: string;
};

const CarouselContent = ({
  children,
  backgroundImage,
}: CarouselContentProps) => {
  return (
    <Box
      sx={{
        marginTop: "0.2rem",
        width: "100%",
        height: "30rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",

          background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 3,
          alignItems: "flex-start",
          marginLeft: "4rem",
          color: "#fff", // Garante que o texto seja branco sobre a sombra
          width: "100%",
          px: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CarouselContent;
