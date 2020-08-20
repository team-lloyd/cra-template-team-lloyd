import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  const snapshot = shallow(<Header />);
  expect(snapshot).toMatchSnapshot();
});
