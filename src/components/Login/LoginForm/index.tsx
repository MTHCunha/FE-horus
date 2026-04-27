import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "@tanstack/react-router";
import React from "react";
import styles from "./styles.module.scss";
import logoHorus from "@/assets/horus-logo.png";

const FormLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Box className={styles.loginForm}>
      <Box
        component="img"
        src={logoHorus}
        alt=""
        className={styles.loginForm__logoImg}
      />
      <Typography
        sx={{
          color: "var(--horus-blue)",
          fontWeight: "bolder",
          margin: ".1rem auto .1rem auto",
        }}
      >
        Bem vindo de volta !
      </Typography>
      <Typography
        sx={{
          color: "var(--horus-blue)",
          margin: ".1rem auto 1.5rem auto",
          fontSize: ".8rem",
        }}
      >
        Conectando conhecimento clínico e precisão de IA na saúde da retina.
      </Typography>

      <Box className={styles.loginForm__fields}>
        <TextField
          id="login-email"
          label="Email"
          placeholder="seu@email.com"
          type="email"
          required
          className={styles.loginForm__textField}
        />
        <FormControl fullWidth variant="outlined" required>
          <InputLabel htmlFor="login-password">Senha</InputLabel>
          <OutlinedInput
            id="login-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "Ocultar senha" : "Exibir senha"}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
        </FormControl>
      </Box>

      <Button
        component={Link}
        to="/forgot-password"
        variant="text"
        className={styles.loginForm__forgotPassword}
      >
        Esqueceu a senha?
      </Button>

      <Box className={styles.loginForm__actions}>
        <Button
          type="submit"
          variant="contained"
          className={styles.loginForm__loginButton}
        >
          Login
        </Button>
        <Divider sx={{ fontSize: 12 }}>OU</Divider>
        <Button
          component={Link}
          to="/register"
          variant="outlined"
          className={styles.loginForm__registerButton}
        >
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
};

export default FormLogin;
