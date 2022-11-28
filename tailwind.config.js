/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        cust_white: 'hsl(0, 0%, 100%)',
        cust_lightGrey: 'hsl(217, 12%, 63%)',
        cust_mediumGrey: 'hsl(216, 12%, 54%)',
        cust_darkBlue: 'hsl(213, 19%, 18%)',
        cust_darkBlue2: 'hsl(213, 19%, 22%)',
        cust_veryDarkBlue: 'hsl(216, 12%, 8%)',
        cust_orange: 'hsl(25, 97%, 53%)'
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'cust_smooth': '0.85rem'
    }
  },
  plugins: [],
}
