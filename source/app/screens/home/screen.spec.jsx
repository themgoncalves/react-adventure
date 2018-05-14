/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import { StaticRouter } from 'react-router';
import { defaultState } from 'reducers/auth';

import { Home } from './screen';

const setup = () => {
  const props = {
    unauthenticateUser: jest.fn(),
    auth: { ...defaultState },
  };
  const context = {};
  const enzymeWrapper = mountWithTheme(<StaticRouter location="/" context={context}><Home {...props} /></StaticRouter>);

  return {
    props,
    enzymeWrapper,
  };
};

describe('<Home />', () => {
  it('should match snapshot', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it('should render without crash', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.exists()).toBeTruthy();
  });

  it('should contain navigation menu', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('ul')).toHaveLength(1);
    expect(enzymeWrapper.find('li')).toHaveLength(5);
  });
});
