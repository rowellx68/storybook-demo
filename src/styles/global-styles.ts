import { fonts, colours } from './variables';

const marginReset = {
  margin: 0,
};

const paddingReset = {
  padding: 0,
};

const fontReset = {
  fontSize: '100%',
  fontWeight: 'normal',
};

const mediaReset = {
  height: 'auto',
  maxWidth: '100%',
};

const boxReset = {
  height: '100%',
  boxSizing: 'border-box',
  overflow: 'hidden',
};

export const baseGlobalStyles = {
  html: { ...boxReset, ...marginReset, ...paddingReset },
  body: {
    ...boxReset,
    ...marginReset,
    ...paddingReset,
    fontFamily: fonts.default,
  },
  'html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6': {
    margin: 0,
    padding: 0,
  },
  p: { ...marginReset, ...paddingReset },
  ol: { ...marginReset, ...paddingReset },
  ul: {
    ...marginReset,
    ...paddingReset,
    listStyle: 'none',
  },
  li: { ...marginReset, ...paddingReset },
  dl: { ...marginReset, ...paddingReset },
  dt: { ...marginReset, ...paddingReset },
  dd: { ...marginReset, ...paddingReset },
  blockquote: { ...marginReset, ...paddingReset },
  figure: { ...marginReset, ...paddingReset },
  fieldset: { ...marginReset, ...paddingReset },
  legend: { ...marginReset, ...paddingReset },
  textarea: { ...marginReset, ...paddingReset },
  pre: { ...marginReset, ...paddingReset },
  iframe: { ...marginReset, ...paddingReset, border: 0 },
  hr: { ...marginReset, ...paddingReset },
  h1: { ...fontReset, ...marginReset, ...paddingReset },
  h2: { ...fontReset, ...marginReset, ...paddingReset },
  h3: { ...fontReset, ...marginReset, ...paddingReset },
  h4: { ...fontReset, ...marginReset, ...paddingReset },
  h5: { ...fontReset, ...marginReset, ...paddingReset },
  h6: { ...fontReset, ...marginReset, ...paddingReset },
  button: marginReset,
  input: marginReset,
  select: marginReset,
  '*': {
    '::before': {
      boxSizing: 'inherit',
    },
    '::after': {
      boxSizing: 'inherit',
    },
  },
  img: mediaReset,
  video: mediaReset,
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  td: {
    padding: 0,
    ':not([align])': {
      textAlign: 'left',
    },
  },
  th: {
    padding: 0,
    ':not([align])': {
      textAlign: 'left',
    },
  },
  '#root': {
    padding: '1rem',
    height: '100%',
    color: colours.dark,
  },
};

const globalStyles = {
  ...baseGlobalStyles,
  ':root': {
    '--primary': colours.coral,
    '--default-text': colours.gray[800],
  },
  '#root': {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100%',
    color: 'var(--default-text)',
  },
};

export default globalStyles;
