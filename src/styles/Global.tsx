import { createGlobalStyle } from 'styled-components'
import { reboot } from 'styled-reboot'

const GlobalStyle = createGlobalStyle`

  ${reboot};

  html,
  body,
  #root,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }

  ::selection {
    background-color: ${props => props.theme.colors.highlightBackground};
    color: ${props => props.theme.colors.highlightColor};
    color: #fff;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeSpeed;
    color: ${props => props.theme.colors.text};
    text-align: left;
    background-color: ${props => props.theme.colors.background};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fonts.headings};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }

  h2 {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }

  h3 {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }

  h4 {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }

  h5 {
    font-size: ${props => props.theme.fontSizes[2]}px;
  }

  h6 {
    font-size: ${props => props.theme.fontSizes[1]}px;
  }

  p {
    font-size: ${props => props.theme.fontSizes[1]}px;
    a {
      color: ${props => props.theme.colors.text};
      text-decoration: underline;
    }
    @media (min-width: ${props => props.theme.breakpoints[0]}) {
      & {
        font-size: ${props => props.theme.fontSizes[1]}px;
        font-size: calc(.4vw + ${props => props.theme.fontSizes[1]}px);
      }
    }
    @media (min-width: ${props => props.theme.breakpoints[1]}) {
      & {
        font-size: ${props => props.theme.fontSizes[1]}px;
        font-size: calc(.2vw + ${props => props.theme.fontSizes[1]}px);
      }
    }

  }

  blockquote {
    p {
      font-size: ${props => props.theme.fontSizes[2]}px;
    }
  }

  a {
    color: ${props => props.theme.colors.text};
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.text};
    }
  }

  input, textarea {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
    background-clip: padding-box;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:focus {
      color: #495057;
      background-color: transparent;
      border-color: ${props => props.theme.colors.primary};
    }
  }

  [role="button"] {
    cursor: pointer;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
    white-space: nowrap;
    table-layout: fixed;
    -webkit-overflow-scrolling: touch;

    th, td {
      padding: 0.5rem 1rem;
      border: 1px solid #e9ebec;
    }
  }
`

export default GlobalStyle
