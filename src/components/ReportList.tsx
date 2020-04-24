import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

const ReportList = () => {
  return <FlatList style={styles.listContainer} />;
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

export default ReportList;
