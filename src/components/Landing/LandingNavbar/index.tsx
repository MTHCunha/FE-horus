import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  Button,
  ButtonBase,
} from "@mui/material";
import styles from "./styles.module.scss";
import { Link } from "@tanstack/react-router";
import logoHorus from "@/assets/horus-logo.png";

function Logo() {
  return (
    <ButtonBase
      component={Link}
      to="/"
      disableRipple // Opcional: remove a onda se quiser um visual mais estático
      sx={{
        borderRadius: "4px",
        p: 0.5,
        display: "flex",
        alignItems: "center",
        gap: 1, // Cria o espaçamento perfeito entre img e texto
        transition: "opacity 0.2s",
        "&:hover": { opacity: 0.8 }, // Um feedback visual suave ao passar o mouse
      }}
    >
      <Box
        component="img"
        src={logoHorus}
        alt=""
        sx={{
          height: { xs: 40, md: 50 },
          width: "auto",
          display: "block",
        }}
      />

      <Typography noWrap className={styles.landingNavBar__logoName}>
        HÓRUS
      </Typography>
    </ButtonBase>
  );
}

export default function LandingNavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={styles.landingNavBar__container}>
        <Toolbar disableGutters className={styles.landingNavBar__toolBar}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Logo />
          </Box>
          <Box sx={{ gap: 5 }}>
            <Button
              component={Link}
              to="/Login"
              variant="text"
              className={styles.landingNavBar__loginButton}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              className={styles.landingNavBar__signupButton}
            >
              Sign-Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
