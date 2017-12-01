import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import App from '../App';
import Bar from '../comps/components/Bar';
import { shallow } from 'enzyme';
describe('Profile Page', function() {
    it('renders correctly', () => {
	const tree = shallow(<App />)
	expect(tree).toMatchSnapshot();
    });
    it('length 1', function() {
	const tree = shallow(<App />)
	expect(tree.length).toBe(1);
    });
});
