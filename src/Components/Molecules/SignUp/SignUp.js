import React from "react";
import { Divider, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { theme } from "../../../AppTheme";
import { ThemeProvider } from "@emotion/react";
import AuthService from "../../../Services/AuthService";
import { useContext } from "react";
import { UserContext } from "../../../store/UserReducer";

export default function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { setUser } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    if (!email.includes("@")) {
      toast.error("L'adresse mail n'est pas valide");
      return;
    }
    if (password !== passwordConfirm) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }
    // if (password.length < 6) {
    //   toast.error("Le mot de passe doit contenir au moins 6 caractères");
    //   return;
    // }
    const user = {
      email,
      password,
      username,
    };
    await AuthService.CallSignUp(user).then((user) => {
      if (user) {
        setUser(user);
        toast.success("Vous êtes bien inscrit");
        navigate("/");
      }
    });
  }

  return (
    <>
      <div className="m-32">
        <center>
          <ThemeProvider theme={theme}>
            <Box sx={{ maxWidth: 500 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Créer un compte
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      id="username"
                      label="Identifiant"
                      variant="outlined"
                      style={{ margin: 24, width: "90%" }}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      type="email"
                      style={{ margin: 24, width: "90%" }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      id="password"
                      label="Mot de passe"
                      variant="outlined"
                      type="password"
                      style={{ margin: 24, width: "90%" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                      id="passwordConfirm"
                      label="Confirmer le mot de passe"
                      variant="outlined"
                      type="password"
                      style={{ margin: 24, width: "90%" }}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      style={{ margin: 24, width: "90%" }}
                      type="submit"
                      color="primary"
                      sx={{ backgroundColor: theme.palette.primary.ok }}
                    >
                      S'enregistrer
                    </Button>
                    <Divider></Divider>
                    <Typography
                      variant="body2"
                      style={{ margin: 24, width: "90%" }}
                    >
                      Déjà inscrit ?
                    </Typography>
                    <Button size="small" onClick={() => navigate("/signIn")}>
                      Se connecter
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
