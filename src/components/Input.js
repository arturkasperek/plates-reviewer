import React from 'react';
import { Input as RNInput } from 'react-native-elements';
import {StyleSheet} from "react-native";

export const Input = (props) => {
  return (
    <RNInput
      inputStyle={{
        ...styles.main,
        ...props.style,
      }}
      {...props}
    />
  )
};

const styles = StyleSheet.create({
  main: {

  },
});
