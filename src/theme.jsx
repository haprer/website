import { createTheme } from '@mui/material/styles';

export const periwinkle = '#DCD3FA';
export const gunmetal= '#2A303B';
export const lightGreen = '#B5EF8A';
export const aliceWhite = '#E8F0FF';

const theme = createTheme({
    root: {
        flexGrow: 1,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column'
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                // Custom styles for the AppBar
                    width: '100%',
                    color: aliceWhite,
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: gunmetal, 
                    borderRadius: '10px',
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                secondary: {
                    color: lightGreen,   //use secondary text as accent color
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    borderWidth: '1px',
                    borderColor: "#ff0000",
                    padding: '16px',
                },
            },
        },
    },
    palette: {
        primary: {
        main: gunmetal,
        light: aliceWhite,
        dark: periwinkle,
        contrastText: lightGreen,
        },
        secondary: {
            main: gunmetal,
            light: aliceWhite,
            dark: periwinkle,
            contrastText: lightGreen, // Use your color here
        },
    

    }
});

export default theme;