module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.html', './node_modules/flowbite/**/*.js'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
            },
        },
        fontFamily: {
            body: ['Merriamweather'],
            sans: ['Merriamweather'],
        },
    },
    plugins: [require('flowbite/plugin'), require('daisyui')],
};
