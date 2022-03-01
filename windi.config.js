const helper = require('windicss/helpers');

const production = !process.env.NODE_ENV !== 'production';


const LINKABLE = {
  'link-text': 'transition duration-200 ease-linear shadow-box-shadow text-link',
  'link-text-hover': 'shadow-box-shadow-hover text-deeplink',
  'link-card': 'transition ease-linear duration-300',
}

const WIDGET = {
  'headline': 'font-maintext pb-[.6rem]',
  'menu': 'bg-transparent border-none cursor-pointer',
  'tag': 'px-3 mr-2 my-1 rounded-lg',
  'category-tag': 'tag mx-4 shadow-md font-bold',
  'site-description': 'text-beargray text-lg',
  'site-name': 'text-deepgray',
}

module.exports = helper.defineConfig({
  extract: { include: ["./layouts/**/*.html", "./assets/**/*.svg", "./assets/**/*.html", "./assets/**/*.svelte"] },
  shortcuts: { ...LINKABLE, ...WIDGET },
  theme: {
    screens: {
      'three': '1440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // screens: {
    //   'xxl': { 'min': '1600px' },
    //   'xl': { 'min': '1440px' }, // more, 3 column
    //   'lg': { 'max': '1439px' }, // less, 2 column
    //   'lm': { 'max': '1072px' },
    //   'md': { 'max': '960px' }, // pad
    //   'sm': { 'max': '600px' } // phone
    // },
    maxWidth: {
      '4/5': '80%',
      '1/4': '25%',
      '1/2': '50%',
      '5/6': '83.33%',
      '7/8': '87.5%',
      '3/4': '75%',
      '2/3': '66.67%',
      'full': '100%',
      '7/12': '58.33%',
      '1/3': '33.33%',
      '4/9': '45%'
    },
    minHeight: {
      '100': '25rem',
      '48': '12rem',
      '36': '9rem',
      '0': '0',
      '96': '24rem',
      'screen': '100vh'
    },
    maxHeight: {
      'summary': '7.3rem',
      '60': '15rem',
      '80': '20rem',
    },
    fontFamily: {
      'code': ["Consolas", "Monaco", "'Andale Mono'", "'Ubuntu Mono'", "monospace"],
      'headline': ["Lato", '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', '"sans-serif"'],
      'maintext': ['"-apple-system"', "STXihei", "华文细黑", "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", "Heiti", "黑体", '"sans-serif"'],
      'button': ["-apple-system", "'Helvetica Neue'", "'PingFang SC'", "'WenQuanYi Micro Hei'", "'noto sans'", "Cantarell", "'Arial'"]
    },
    extend: {
      opacity: {
        '6': '0.06',
        '10': '0.1'
      },
      scale: {
        '115': '1.15'
      },
      gridTemplateColumns: {
        '63': 'repeat(63, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '33': '33',
      },
      gridColumnEnd: {
        '64': '64',
        '32': '32'
      },
      padding: {
        '1/48': '2.08%',
        '1/25': '4%',
        'smallest': '1px',
        'button': '0.4rem'
      },
      margin: {
        '1/4': '25%',
        '1/3': '33.333%',
        '7/24': '29.17%',
        '1/100': '1%',
        '1/24': '4.166%'
      },
      colors: {
        cardtext: '#f2f2f2',
        bg: 'var(--bg-color)',
        hyper: 'var(--hyper)',
        buttontext: 'var(--button)',
        deepgray: 'var(--deepgray)',
        beargray: 'var(--beargray)',
        lightgray: 'var(--lightgray)',
        tagborder: 'var(--tagborder)',
        blockquote: 'var(--blockquote)',
        bqbg: 'var(--bqbg)',
        link: 'var(--link)',
        deeplink: 'var(--deeplink)',
        slightgray: 'var(--slightgray)',
        maintext: 'var(--main-text)',
        contentbg: 'var(--content-bg)',
        tagbg: 'var(--tag-bg)',
        tagbghover: 'var(--tag-bg-hover)',
        tagbgdeeper: 'var(--tag-bg-deeper)',
        headline: 'var(--headline)',
        codecolor: 'var(--code)',
        bqborder: 'var(--bqborder)',
        categorytag: 'var(--category-tag)',
        svg: 'var(--svg)',
        cardcover: 'var(--card-cover)',
        atcheadline: 'var(--article-headline)'
      },
      inset: {
        '10': '2.5rem'
      },
      fontSize: {
        'title': '1.75rem',
        'button': '0.8125rem',
        'code': '0.9375rem'
      },
      width: {
        '36': '9rem',
        '160': '40rem',
        '184': '46rem',
        '204': '51rem',
        '256': '64rem',
        '224': '56rem',
        '288': '72rem',
        '6/13': '46.15%',
        '15/16': '93.75%',
        '19/20': '95%',
        '2/9': '22.5%'
      },
      height: {
        '36': '9rem',
        '100': '25rem',
      },
      borderRadius: {
        'big': '.75rem'
      },
      boxShadow: {
        'box-shadow': "0 -.15rem 0 rgba(190, 195, 200, 0.5) inset;",
        'box-shadow-hover': "0 -.5rem 0 rgba(190, 195, 200, 0.5) inset;",
        'button': "rgba(0, 0, 0, 0.4) 0px 0px 10px"
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['first', 'last']
    }
  },
  plugins: [],

})