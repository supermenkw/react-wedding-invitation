import { createTheme } from '@mui/material/styles';

// Define your theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Your primary color
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: '#E9FCFF',
          '& label.Mui-focused': {
            color: '#E9FCFF', // Label color when focused
          },
          '& .MuiInputBase-root:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E9FCFF',
            },
          },
          '& .MuiInputBase-input': {
            color: '#E9FCFF',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E9FCFF',
          },
          '& .MuiOutlinedInput-notchedOutline:hover': {
            borderColor: '#E9FCFF',
          },
          '& .MuiOutlinedInput-root': {
            borderColor: '#E9FCFF',
            '&.Mui-focused fieldset': {
              borderColor: '#E9FCFF',
            },
          },
          '& label': {
            color: '#E9FCFF',
            fontSize: '0.9rem'
          },
        },
      },
    },
  },
});

export default theme;