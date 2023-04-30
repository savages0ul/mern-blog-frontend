import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  /*TODO: временно закомментировал, чтобы не было ошибки*/
  // shadows: ["none"],
  palette: {
    primary: {
      main: '#4361ee',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 400,
    },
  },
});
