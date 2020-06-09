import React from 'react';
import { Button as RNButton } from 'react-native-elements';
import {StyleSheet} from "react-native";

export const Button = (props) => {
  return (
    <RNButton
      title="Solid Button"
      buttonStyle={{
        ...styles.main,
        ...props.style,
      }}
      {...props}
    />
  )
};

export const CancelButton = (props) => {
  return (
    <RNButton
      title="Solid Button"
      buttonStyle={{
        backgroundColor: 'red',
      }}
      {...props}
    />
  )
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#311B92',
    borderRadius: 0,
  },
});
