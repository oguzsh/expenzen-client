"use client";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6750A4",
      dark: "#CFBDFE",
    },
    secondary: {
      main: "#E8DEF8",
      dark: "#D0BCFE",
    },
    background: {
      default: "#FFFBFE",
      paper: "#F5F0F7",
    },
    text: {
      primary: "#000000",
      secondary: "#1C1B1F",
    },
    success: {
      main: "#b9e769",
    },
    error: {
      main: "#BA1A1A",
    },
    warning: {
      main: "#ffca46",
    },
    divider: "#e0e0e0",
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#CFBDFE",
    },
    secondary: {
      main: "#D0BCFE",
    },
    background: {
      default: "#141218",
      paper: "#141218",
    },
    text: {
      primary: "#FFFBFE",
      secondary: "#6750A4",
    },
    success: {
      main: "#6fb400",
    },
    error: {
      main: "#BA1A1A",
    },
    warning: {
      main: "#fdb536",
    },
    divider: "#9e9e9e",
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  colorSchemes: {
    light: lightTheme,
    dark: darkTheme,
  },
  cssVariables: true,
});

export default theme;
