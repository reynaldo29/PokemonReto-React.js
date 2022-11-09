import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: "#040403",
    },
    secondary: {
      main: "#5B7553",
    },
    success: {
      main: "#8EB897",
    },
  },
});
export default theme;
