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
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {/* Background Image */}
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

      {/* Overlay Gradient */}
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

      {/* Content Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 3,
          alignItems: "flex-start", // Alinha na esquerda (eixo X)
          marginLeft: "4rem",
          color: "#fff",
          width: "100%",
          px: 2,
 
          pt: "8rem",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CarouselContent;
