import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './index.jsx';

Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
    it('App component says "App Works!"', () => {
        const wrapper = shallow(
        <App />
        );
    
        const title = wrapper.find('div');
        expect(title.text()).toBe('App works!');
    });
});
