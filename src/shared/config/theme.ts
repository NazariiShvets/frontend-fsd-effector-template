import { createTheme, responsiveFontSizes } from '@mui/material';

import deepmerge from 'deepmerge';

const themeWithPalette = createTheme({
  palette: {
    mode: 'light'
  }
});

const themeWithOverrides = createTheme(
  deepmerge(themeWithPalette, {
    components: {
      MuiButton: {
        defaultProps: {
          type: 'button'
        }
      },

      MuiCssBaseline: {
        styleOverrides: {
          '#root': {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh'
          },
          html: {
            scrollBehavior: 'smooth'
          },

          //Youtube scrollbar styles
          '*::-webkit-scrollbar': {
            width: '16px'
          },

          '*::-webkit-scrollbar-track': {
            borderRadius: '8px'
          },

          '*::-webkit-scrollbar-thumb': {
            height: '56px',
            borderRadius: '8px',
            border: '4px solid transparent',
            backgroundClip: 'content-box',
            backgroundColor: '#888'
          },

          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555'
          },

          //keyframes
          '@keyframes upload': {
            '0%': {
              backgroundPosition: '0 0'
            },
            '100%': {
              backgroundPosition: '-70px 0'
            }
          }
        }
      }
    }
  })
);

const theme = responsiveFontSizes(themeWithOverrides);

export { theme };
