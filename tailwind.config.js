/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fades: {
          '000': '#ffffff',
          '100': '#f6f7f9',
          '200': '#eeeff4',
          '300': '#e2e8f4',
          '350': '#e5e5e5',
          '400': '#cdd7eb',
          '500': '#8b94b3',
          '600': '#596782',
          '700': '#384359',
          '800': '#2b2a3a',
        },
        primary: {
          '100': '#e5f2f2',
          '200': '#b1e2e2',
          '300': '#7fcece',
          '400': '#34a2b1',
          '500': '#2c8a97',
          '600': '#22727c',
          '700': '#0d383e',
        },
        blue: {
          '100': '#f4f7fe',
          '200': '#e0edff',
          '300': '#b5d2fe',
          '400': '#488af8',
          '500': '#3271da',
          '600': '#19499b',
          '700': '#0d2d64',
        },
        cyan: {
          '100': '#effbff',
          '200': '#b1ecff',
          '300': '#4ecff8',
          '400': '#21a5ce',
          '500': '#1a8caf',
          '600': '#14708c',
          '700': '#0e4c5f',
        },
        orange: {
          '100': '#fff0e0',
          '200': '#fddbb8',
          '300': '#ffbf81',
          '400': '#ff7f00',
          '500': '#cc5d01',
          '600': '#992e04',
          '700': '#641f03',
        },
        yellow: {
          '100': '#fffde8',
          '200': '#fff59c',
          '300': '#f8e753',
          '400': '#fac02e',
          '500': '#d19113',
          '600': '#6e5014',
          '700': '#43300b',
        },
        red: {
          '100': '#fef2f2',
          '200': '#fee0e2',
          '300': '#ffbdbe', 
          '400': '#eb4049',
          '500': '#bf2638',
          '600': '#811a2d',
          '700': '#631422',
        },
        green: {
          '100': '#eef9f5',
          '200': '#daefe8',
          '300': '#8ee6c0',
          '400': '#28a677',
          '500': '#0e875c',
          '600': '#004c3f',
          '700': '#022f27',
        },

        content: {
          '100': '#ffffff',
          '200': '#ccd7eb',
          '300': '#8b94b3',
          '400': '#677797',
          '500': '#465065',
          '600': '#2b2a3a',
        },

        others: {
          '100': '#4B505E',
          '200': '#BCC6DB'
        },

        'alpha-white': {
          '100': 'rgba(255, 255, 255, 0.3)',
          '200': 'rgba(255, 255, 255, 0.5)',
          '300': 'rgba(255, 255, 255, 0.8)',
        },

        'alpha-grey': {
          '100': 'rgba(42, 42, 58, 0.1)',
          '200': 'rgba(42, 42, 58, 0.15)',
          '300': 'rgba(42, 42, 58, 0.3)',
          '400': 'rgba(42, 42, 58, 0.4)',
          '500': 'rgba(42, 42, 58, 0.5)',
          '600': 'rgba(42, 42, 58, 0.8)',
        },
        
        'cool-grey': {
          '100': '#f5f7f7',
          '200': '#dee1e6',
          '300': '#9aa0a6',
          '400': '#767a7e',
          '500': '#4a4c4f',
        },
      },
    },
  },
  plugins: [],
}
