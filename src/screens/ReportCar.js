import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ReportCar = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>Report Him!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#E6A92A',
  },
});

export default ReportCar;