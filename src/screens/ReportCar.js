import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ReportCar = ({navigation, props}) => {
  return (
    <View style={styles.container}>
      <Text>Report Him!</Text>
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => {
          navigation.navigate('Camera');
        }}>
        <Text>Take a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6A92A',
  },
  cameraButton: {
    width: 300,
    backgroundColor: '#EF6C00',
    borderRadius: 25,
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default ReportCar;
