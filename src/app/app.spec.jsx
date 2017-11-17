import React from 'react';
import Enzyme, {shallow} from 'enzyme';

import App from './index.jsx';

describe('<App />', () => {
    it('App component says "App Works!"', () => {
        const wrapper = shallow(<App />);
        const title = wrapper.find('div');
        expect(title.text()).toBe('<HelmetWrapper />App works!');
    });
});
