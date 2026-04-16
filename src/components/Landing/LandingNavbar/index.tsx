import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import styles from "./styles.module.scss";
import { Link } from "@tanstack/react-router";

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
            <AdbIcon sx={{ mr: 1, color: "black" }} />
            <Typography noWrap className={styles.landingNavBar__logoName}>
              LOGO
            </Typography>
          </Box>
          <Box>
            <Button
              component={Link}
              to="/Login"
              variant="text"
              className={styles.landingNavBar__loginButton}
            >
              Entrar
            </Button>
            <Button variant="contained" size="medium" sx={{ ml: 1 }}>
              Cadastrar
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
