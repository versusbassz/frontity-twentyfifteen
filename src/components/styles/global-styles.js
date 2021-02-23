import { css } from "frontity";

/**
 * 1.0 - Reset
 *
 * Resetting and rebuilding styles have been helped along thanks to the fine
 * work of Eric Meyer, Nicolas Gallagher, Jonathan Neal, and Blueprint.
 */
const Reset = () => css`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
    border: 0;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
  
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  
  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }
  
  body {
    background: #f1f1f1;
  }
  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  nav,
  section {
    display: block;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  table {
    border-collapse: separate;
    border-spacing: 0;
  }
  
  caption,
  th,
  td {
    font-weight: normal;
    text-align: left;
  }
  
  fieldset {
    min-width: inherit;
  }
  
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
  }
  
  blockquote,
  q {
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    quotes: none;
  }
  
  a:focus {
    outline: 2px solid #c1c1c1;
    outline: 2px solid rgba(51, 51, 51, 0.3);
  }
  
  a:hover,
  a:active {
    outline: 0;
  }
  
  a img {
    border: 0;
  }
`;

const globalStyles = () => {
  return css([
    Reset(),
  ]);
}

export default globalStyles;
