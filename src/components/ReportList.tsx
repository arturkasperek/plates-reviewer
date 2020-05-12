import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const ReportList = props => {
  const [report, setReport] = useState();
  const [nav, setnav] = useState();

  useEffect(() => {
    setReport(props.report);
    setnav(props.navi);
  }, [props.report, props.navi]);

  return (
    <FlatList
      style={styles.flatList}
      data={report}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <TouchableWithoutFeedback
          onPress={() => {
            nav.navigate('Details');
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
    height: 530,
  },
  listObject: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'column',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
