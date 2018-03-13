import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';

// Application Tab Navigator
export const AppRoot = TabNavigator(
  {
    Screen1: {
      screen: () => (<View><Text>Screen1</Text></View>),
    },
    Screen2: {
      screen: () => (<View><Text>Screen2</Text></View>),
    },
  },
);
