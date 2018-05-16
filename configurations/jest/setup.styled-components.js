import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';


import rootTheme from './helpers/theme';

const shallowWithTheme = (tree, theme = rootTheme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();
  return shallow(tree, { context });
};

const mountWithTheme = (tree, theme = rootTheme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, {
    context,
    // Needed so child components receive the theme prop
    childContextTypes: ThemeProvider.childContextTypes,
  });
};

global.shallowWithTheme = shallowWithTheme;
global.mountWithTheme = mountWithTheme;

