import { createTheme, responsiveFontSizes } from '@mui/material';

export const AppTheme = createTheme({
    // o padrão é 8
    spacing: 8,
    palette: {
        text: {
            primary: '#021E42',
            secondary: '#CED4DA',
            disabled: '#9e9e9e',
        },
        primary: {
            main: '#021E42',
            dark: '#021E42',
            light: '#021E42',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#CED4DA',
            dark: '#CED4DA',
            light: '#CED4DA',
            contrastText: '#FFFFFF',
        },
        error: {
            main: '#D32F2F',
            dark: '#C62828',
            light: '#EF5350',
            contrastText: '#FFFFFF',
        },
        warning: {
            main: '#ED6C02',
            dark: '#E65100',
            light: '#FF9800',
            contrastText: '#FFFFFF',
        },
        success: {
            main: '#2E7D32',
            dark: '#1B5E20',
            light: '#4CAF50',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#CED4DA',
            paper: '#FFFFFF',
        },
    },
});
