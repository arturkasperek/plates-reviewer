import React from 'react';
import { Button as RNButton } from 'react-native-elements';

export const Button = (props) => {
  return (
    <RNButton
      title="Solid Button"
      buttonStyle={{
        backgroundColor: 'blue'
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
