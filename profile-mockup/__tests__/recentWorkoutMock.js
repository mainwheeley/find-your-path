import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RecentWorkouts from '../comps/components/recentWorkouts';
import { shallow } from 'enzyme';
describe('Profile Bar', function() {
    it('renders correctly', () => {
	const tree = shallow(<RecentWorkouts />)
	expect(tree).toMatchSnapshot();
    });
    it('length 1', function() {
	const tree = shallow(<RecentWorkouts />)
	expect(tree.length).toBe(1);
    });
});
