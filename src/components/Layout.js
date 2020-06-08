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
    backgroundColor: 'white'
  }
});
