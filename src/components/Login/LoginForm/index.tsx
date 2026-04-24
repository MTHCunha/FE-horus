import { TextField, Box, Button } from "@mui/material";
import styles from "./styles.module.scss";

const FormLogin = () => {
  return (
    <Box className={styles.loginForm}>
      <Box className={styles.loginForm__fields}>
        <TextField id="" required className={styles.loginForm__textField} />
        <TextField id="" required className={styles.loginForm__textField} />
      </Box>
      <Button sx={{}} className={styles.loginForm__sendButton}>
        Enviar
      </Button>
    </Box>
  );
};

export default FormLogin;
