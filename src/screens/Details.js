import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Layout} from "../components/Layout";

const Details = ({route, navigation}) => {
  const {platesNumber} = route.params;
  const {id} = route.params;
  const {comment} = route.params;
  const {long} = route.params;
  const {lat} = route.params;
  const {mediaURL} = route.params;
  const {createdAt} = route.params;
  const {updatedAt} = route.params;

  return (
    <Layout>
      <View>
        <Image style={styles.image} source={{uri: mediaURL}} />
        <Text>plates number: {platesNumber}</Text>
        <Text>id: {id}</Text>
        <Text>comment: {comment}</Text>
        <Text>created At: {createdAt}</Text>
        <Text>updated At:{updatedAt}</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#E6A92A',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default Details;
