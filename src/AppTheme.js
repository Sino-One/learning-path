import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#e0e2db",
    200: "#d2d4c8",
    300: "#b8bdb5",
    400: "#889696",
    500: "#5f7470",
    600: "#000000",
  },

  secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006",
  },
  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
      ok: shades.primary[400],
      soft: shades.primary[300],
      light: shades.primary[100],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
});
