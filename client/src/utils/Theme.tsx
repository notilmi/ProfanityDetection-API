import { Theme, createTheme } from "@mui/material/styles";
import { blue, indigo, yellow, red } from "@mui/material/colors";
import { Gabarito } from "next/font/google";

// Font
const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const commonComponents: Theme["components"] = {
  MuiCard: {
    defaultProps: {
      elevation: 0,
      variant: "outlined",
    },
    styleOverrides: {
      root: {
        borderRadius: "12px",
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
      variant: "outlined",
    },
    styleOverrides: {
      root: {},
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: "600",
        borderRadius: "8px",
      },
    },
  },
};

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: red[900],
    },
    secondary: {
      main: indigo[900],
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    fontFamily: gabarito.style.fontFamily,
  },
  components: commonComponents,
});

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[900],
    },
    secondary: {
      main: indigo[900],
    },
    background: {
      default: "#212622",
    },
  },
  typography: {
    fontFamily: gabarito.style.fontFamily,
  },
  components: commonComponents,
});

export { LightTheme, DarkTheme };
