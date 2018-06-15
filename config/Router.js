import React from 'react';
import {TabNavigator} from 'react-navigation';
import {StackNavigator,} from 'react-navigation';
//import {Icon} from 'react-native-elements';

import SelectionSort from '../Components/SelectionSort';
import CocktailSort from '../Components/CocktailSort';

export const Tabs = TabNavigator({
  SelectionSort: {
    screen: SelectionSort,
  },
  CocktailSort: {
    screen: CocktailSort,
  },
});
