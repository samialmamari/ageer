import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",

    ],

    theme: {
        mytheme: {
          
            "primary": "#d249d5",
                     
            "secondary": "#f000b8",
                     
            "accent": "#1dcdbc",
                     
            "neutral": "#2b3440",
                     
            "base-100": "#ffffff",
                     
            "info": "#3abff8",
                     
            "success": "#36d399",
                     
            "warning": "#fbbd23",
                     
            "error": "#f87272",
                     },
                   
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms,
        require("daisyui")],
        daisyui: {
            themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
            darkTheme: "dark", // name of one of the included themes for dark mode
            base: true, // applies background color and foreground color for root element by default
            styled: true, // include daisyUI colors and design decisions for all components
            utils: true, // adds responsive and modifier utility classes
            rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
            prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
            logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
          },
};
