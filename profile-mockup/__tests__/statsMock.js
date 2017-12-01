import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Stats from '../comps/components/Stats';
import { shallow } from 'enzyme';
describe('Profile Bar', function() {
    it('renders correctly', () => {
	const tree = shallow(<Stats />)
	expect(tree).toMatchSnapshot();
    });
    it('length 1', function() {
	const tree = shallow(<Stats />)
	expect(tree.length).toBe(1);
    });
});
