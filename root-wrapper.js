import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'

import CodeBlock from './src/components/CodeBlock'
import GlobalStyle from './src/styles/Global'
// Theme
import Theme from './src/styles/Theme'

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <MDXProvider components={components}>
      <GlobalStyle />
      {element}
    </MDXProvider>
  </ThemeProvider>
)
