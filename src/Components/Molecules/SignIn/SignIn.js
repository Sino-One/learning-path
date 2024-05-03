import React from "react";
import { navigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../../store/UserReducer";
import AuthService from "../../../Services/AuthService";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../AppTheme";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const handleSignIn = async (e, data) => {
    e.preventDefault();
    await AuthService.CallSignIn(data).then((user) => {
      if (user) {
        setUser(user);
        toast.success("Connexion réussie !");
        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="m-32">
        <center>
          <ThemeProvider theme={theme}>
            <Box sx={{ maxWidth: 500 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Se connecter
                  </Typography>
                  <form
                    onSubmit={(e) => handleSignIn(e, { username, password })}
                  >
                    <TextField
                      id="email"
                      label="Identifiant (email)"
                      variant="outlined"
                      className="m-24"
                      style={{ margin: 24, width: "90%" }}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                      id="password"
                      label="Mot de passe"
                      variant="outlined"
                      type="password"
                      style={{ margin: 24, width: "90%" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ margin: 24, width: "90%" }}
                      sx={{ backgroundColor: theme.palette.primary.ok }}
                    >
                      Se connecter
                    </Button>
                    <Divider></Divider>
                    <Typography
                      variant="body2"
                      style={{ margin: 24, width: "90%" }}
                    >
                      Pas encore de compte ?
                    </Typography>
                    <Button size="small" onClick={() => navigate("/signUp")}>
                      S'inscrire
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Box>
          </ThemeProvider>
        </center>
      </div>
    </>
  );
}
