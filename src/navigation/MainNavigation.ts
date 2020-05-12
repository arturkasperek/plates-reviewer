import {createStackNavigator, HeaderBackground} from 'react-navigation-stack';

import Main from '../screens/Main';
import ReportCar from '../screens/ReportCar';
import Details from '../screens/Details';
import {StyleSheet} from 'react-native';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      headerStyle: {backgroundColor: '#6200EE'},
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 24,
      },
    },
  },
  ReportCar: {screen: ReportCar},
  Details: {screen: Details},
});

export default MainNavigator;
