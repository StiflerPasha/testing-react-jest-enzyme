import React              from 'react';
import { shallow }        from 'enzyme';
import Headline           from './index';
import { findByTestAttr } from './../../../Utils';

const setUp = (props = {}) => {
  return shallow(<Headline { ...props } />);
};


describe('Headline Component', () => {


  describe('Have props', () => {

	 let component;
	 beforeEach(() => {
		const props = {
		  header: 'Test Header',
		  desc: 'Test Desc',
		};
		component = setUp(props);
	 });

	 it('should render without errors', () => {
		const wrapper = findByTestAttr(component, 'headlineComponent');
		expect(wrapper.length).toBe(1);
	 });

	 it('should render H1', () => {
		const h1 = findByTestAttr(component, 'header');
		expect(h1.length).toBe(1);
	 });

	 it('should render a desc', () => {
		const desc = findByTestAttr(component, 'description');
		expect(desc.length).toBe(1);
	 });
  });


  describe('Have NO props', () => {

	 let component;
	 beforeEach(() => {
		component = setUp();
	 });

	 it('should not render', () => {
		const wrapper = findByTestAttr(component, 'headlineComponent');
		expect(wrapper.length).toBe(0);
	 });
  });
});