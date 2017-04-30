/* eslint-env jest */

import { shallow } from 'enzyme';

import React from 'react';
import Dotnav from '../lib/Dotnav.js';

describe('<Dotnav />', () => {
  it('should render', () => {
    const component = shallow(<Dotnav withArrows count={3} index={0} />);

    expect(component).toMatchSnapshot();
  });
});
