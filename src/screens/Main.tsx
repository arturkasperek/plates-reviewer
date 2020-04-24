import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

import ReportList from '../components/ReportList';

interface Props {
  navigation: NavigationStackProp<{}>;
}

const Main = ({navigation}: Props) => {
  const [buttonText] = useState('Report Car');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3700B3" />
      <View style={styles.reportCont}>
        <TouchableOpacity
          style={styles.reportButton}
          onPress={() => {
            navigation.navigate('ReportCar');
          }}>
          <Text style={styles.reportButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <ReportList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  reportCont: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  reportButton: {
    width: 300,
    backgroundColor: '#EF6C00',
    borderRadius: 25,
    paddingVertical: 10,
    marginVertical: 20,
  },
  reportButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Main;
