import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      color: {
        'yellow-100': '#FBFFB9',
        'yellow-200': '#FDD692',
        'yellow-300': '#F6B352',
        'yellow-400': '#F68657',
        'yellow-500': '#EC7357',
        'brown-100': '#754F44',
        'gray-100': '#E0E3DA',
        'gray-200': '#383A3F',
        'gray-300': '#1F2124'
      },
      height: {
        22: '88px'
      },
      inset: {
        22: '88px'
      },
      rotate: {
        'm-80': '-80deg',
        'm-45': '-45deg',
        '80': '80deg'
      },
      borderRadius: {
        md: '15px',
        lg: '30px'
      },
      fontSize: {
        'body1-thin': ['12px', { fontWeight: '400' }],
        body2: ['14px', { fontWeight: '500' }],
        'body2-bold': ['14px', { fontWeight: '600' }],

        'body3-thin': ['16px', { fontWeight: '400' }],
        body3: ['16px', { fontWeight: '500' }],
        'body3-bold': ['16px', { fontWeight: '600' }],

        body4: ['18px', { fontWeight: '500' }],
        'body4-bold': ['18px', { fontWeight: '600' }],

        body5: ['24px', { fontWeight: '500' }],

        caption1: ['30px', { fontWeight: '500' }],
        'caption1-extra-bold': ['30px', { fontWeight: '700' }],
        'caption2-extra-bold': ['36px', { fontWeight: '700' }],
        'caption3-bold': ['40px', { fontWeight: '600' }],
        caption4: ['76px', { fontWeight: '500' }],

        title: ['20px', { fontWeight: '500' }],
        'title-bold': ['20px', { fontWeight: '600' }]
      },
      fontFamily: {
        sans: [
          'Noto Sans KR',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      },
      animation: {
        slideInRight: '500ms ease slideInRight',
        slideOutRight: '500ms ease slideOutRight',
        mapSideBarOpen: '300ms ease-in-out mapSideBarOpen',
        mapSideBarClose: '300ms ease-in-out mapSideBarClose',
        mapOpen: '300ms ease-in-out mapOpen',
        mapClose: '300ms ease-in-out mapClose'
      },

      keyframes: {
        slideInRight: {
          from: {
            transform: 'translateX(100%)',
            opacity: '0'
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        slideOutRight: {
          from: {
            transform: 'translateX(0)',
            opacity: '1'
          },
          to: {
            transform: 'translateX(100%)',
            opacity: '0'
          }
        },
        mapSideBarOpen: {
          from: {
            width: '0',
            opacity: '0'
          },
          to: {
            opacity: '1',
            width: '100%/3'
          }
        },
        mapSideBarClose: {
          from: {
            width: '100%/3',
            opacity: '1'
          },
          to: {
            opacity: '0',
            width: '0%'
          }
        },
        mapOpen: {
          from: {
            width: '77%'
          },
          to: {
            width: '100%'
          }
        },
        mapClose: {
          from: {
            width: '100%'
          },
          to: {
            width: '77%'
          }
        }
      }
    }
  },
  plugins: []
};
export default config;
