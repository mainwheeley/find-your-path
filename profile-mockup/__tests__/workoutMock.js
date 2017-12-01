import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Workouts from '../comps/components/Workouts';
import { shallow } from 'enzyme';
describe('Profile Bar', function() {
    it('renders correctly', () => {
	const tree = shallow(<Workouts />)
	expect(tree).toMatchSnapshot();
    });
    it('length 1', function() {
	const tree = shallow(<Workouts />)
	expect(tree.length).toBe(1);
    });
});
