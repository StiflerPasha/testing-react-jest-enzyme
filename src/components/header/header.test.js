import React       from 'react';
import { shallow } from 'enzyme';
import Header      from './index';
import { findByTestAttr } from './../../../Utils';


const setUp = (props = {}) => {
  return shallow(<Header { ...props } />);
};


describe('Header Component', () => {

  let component;
  beforeEach(() => {
	 component = setUp();
  });

  it('should render without error', () => {
	 const wrapper = findByTestAttr(component, 'headerComponent');
	 expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
	 const logo = findByTestAttr(component, 'logo');
	 expect(logo.length).toBe(1);
  });

  it('should render a navigation list', () => {
	 const navList = findByTestAttr(component, 'navList');
	 expect(navList.length).toBe(1);
  });

});