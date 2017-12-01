import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Bar from '../comps/components/Bar';
import { shallow } from 'enzyme';
describe('Profile Bar', function() {
    it('renders correctly', () => {
	const tree = shallow(<Bar />)
	expect(tree).toMatchSnapshot();
    });
    it('length 1', function() {
	const tree = shallow(<Bar />)
	expect(tree.length).toBe(1);
    });
});
