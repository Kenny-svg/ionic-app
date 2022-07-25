module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     mode: 'jit',
     theme: {
       extend: {
        animation: {
          marquee: 'marquee 15s linear infinite',
          marquee2: 'marquee2 15s linear infinite',    
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          marquee2: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0%)' },
          },
        },
        colors: {
          primary: '#DC143C',
          secondary: {
            100: '#B21031',
            200: '#5E091A',
            300: '#F4869C',
            400: '#5b708b'
          }
        }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }