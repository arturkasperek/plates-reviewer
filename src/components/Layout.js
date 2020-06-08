import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

export const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  }
});
