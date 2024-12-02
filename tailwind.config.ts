import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'logo': ['var(--logo-font)', 'cursive'],
                'body': ['var(--body-font)', 'sans-serif'],
            },
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                white: 'var(--text)',
            },
            boxShadow: {
                about: 'inset 0 2px 20px 0 rgb(0 0 0 / 0.5)',
            },
        },
    },
    plugins: [],
};
export default config;
