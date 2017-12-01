import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PastWorkouts from '../comps/components/pastWorkouts';
import { shallow } from 'enzyme';
describe('Profile Bar', function() {
    it('renders correctly', () => {
	const tree = shallow(<PastWorkouts />)
	expect(tree).toMatchSnapshot();
    });
    it('length 1', function() {
	const tree = shallow(<PastWorkouts />)
	expect(tree.length).toBe(1);
    });
});
