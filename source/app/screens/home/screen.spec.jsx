/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import { shallow } from 'enzyme';

import { history } from 'services';
import configureStore from '../../store';
import rootSaga from '../../sagas';

import Home from './screen';

const store = configureStore(history);
store.runSaga(rootSaga);

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home store={store} />);
});

describe('<Home />', () => {
  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
