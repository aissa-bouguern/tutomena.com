import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

import { MDXProvider } from '@mdx-js/react';
import { NewsletterForm, Author, Quiz, Support } from './src/shortcodes';

const shortcodes = { NewsletterForm, Author, Quiz, Support };

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={shortcodes}>
    <ThemeProvider>{element}</ThemeProvider>
  </MDXProvider>
);
