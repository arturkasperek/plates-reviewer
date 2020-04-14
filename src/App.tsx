import React from 'react';
import {createAppContainer} from 'react-navigation';
import MainNavigator from './navigation/MainNavigation';

const App = createAppContainer(MainNavigator);

export default App;
