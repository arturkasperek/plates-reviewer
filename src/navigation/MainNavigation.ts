import {createStackNavigator} from 'react-navigation-stack';

import Main from '../screens/Main';

const MainNavigator = createStackNavigator({
  Home: {screen: Main},
});

export default MainNavigator;
