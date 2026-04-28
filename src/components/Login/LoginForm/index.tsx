import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User } from "lucide-react";
import logoHorus from "@/assets/horus-logo.png";
import styles from "./styles.module.scss";

const FIELD_HEIGHT = "2.5rem";
const LABEL_FONT_SIZE = 14;

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const preventMouseDefault = (event: React.MouseEvent<HTMLButtonElement>) =>
    event.preventDefault();

  return (
    <Box className={styles.loginForm}>
      <Box
        component="img"
        src={logoHorus}
        alt="Horus logo"
        className={styles.loginForm__logoImg}
      />

      <Typography
        sx={{
          color: "var(--horus-blue)",
          fontWeight: "bold",
          margin: ".1rem auto",
        }}
      >
        Bem vindo de volta!
      </Typography>
      <Typography
        sx={{
          color: "var(--horus-blue)",
          fontSize: ".8rem",
          margin: ".1rem auto 1.5rem",
        }}
      >
        Conectando conhecimento clínico e precisão de IA na saúde da retina.
      </Typography>

      <Box className={styles.loginForm__fields}>
        <FormControl fullWidth variant="outlined" required>
          <InputLabel sx={{ fontSize: LABEL_FONT_SIZE }} htmlFor="login-email">
            Email
          </InputLabel>
          <OutlinedInput
            id="login-email"
            label="Email"
            sx={{ height: FIELD_HEIGHT }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <User size={18} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl fullWidth variant="outlined" required>
          <InputLabel
            sx={{ fontSize: LABEL_FONT_SIZE }}
            htmlFor="login-password"
          >
            Senha
          </InputLabel>
          <OutlinedInput
            id="login-password"
            label="Senha"
            type={showPassword ? "text" : "password"}
            sx={{ height: FIELD_HEIGHT }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "Ocultar senha" : "Exibir senha"}
                  onClick={handleTogglePassword}
                  onMouseDown={preventMouseDefault}
                  onMouseUp={preventMouseDefault}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
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
          component={Link}
          to="/dashboard"
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
