import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const ReportList = ({navigation, report}) => {
  return (
    <FlatList
      style={styles.flatList}
      data={report}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Details', {
              id: item.id,
              comment: item.comment,
              long: item.long,
              lat: item.lat,
              mediaURL: item.mediaURL,
              platesNumber: item.platesNumber,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt,
            });
          }}>
          <View style={styles.listObject}>
            <Image style={styles.image} source={{uri: item.mediaURL}} />
            <View style={styles.descriptionView}>
              <Text style={styles.platesNumber}> {item.platesNumber}</Text>
              <Text style={styles.dateAdded}>
                {' '}
                {item.updatedAt.substring(0, 10)}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  flatList: {
  },
  listObject: {
    backgroundColor: '#EEEEEE',
    marginBottom: 20,
    flex: 1,
    flexDirection: 'column',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  descriptionView: {
    flexDirection: 'column',
  },
  platesNumber: {
    fontSize: 28,
  },
  dateAdded: {
    fontSize: 18,
    color: 'rgb(105,105,105)',
  },
});

export default ReportList;
