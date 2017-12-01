import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button, Alert, FlatList, TextInput } from 'react-native';
import Bar from '../comps/components/Bar';
import { shallow } from 'enzyme';
describe('Workout Goal', function() {
it('renders correctly', () => {
const tree = shallow(<Bar />)
expect(tree).toMatchSnapshot();
});
it('length 1', function() {
const tree = shallow(<Bar />)
expect(tree.length).toBe(1);
});
});
