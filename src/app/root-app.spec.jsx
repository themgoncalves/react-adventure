/**
 * React Redux Async Component Starter Kit
 * @author Marcons Goncalves <marx_souza@yahoo.com.br>
 * @version 1.2.01
 */

import React from 'react';
import { shallow } from 'enzyme';

import RootApp from './index.jsx';

describe('<RootApp />', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<RootApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
