import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PastData from '../comps/components/pastData';
import { shallow } from 'enzyme';
describe('Profile Bar', function() {
    it('renders correctly', () => {
	const tree = shallow(<PastData />)
	expect(tree).toMatchSnapshot();
    });
    it('length 1', function() {
	const tree = shallow(<PastData />)
	expect(tree.length).toBe(1);
    });
});
