import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

export const Layout = ({children, scrollable}) => {
  if ( scrollable ) {
    return (
      <ScrollView>
        <View style={styles.container}>
          {children}
        </View>
      </ScrollView>
    )
  } else {
    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
};

Layout.defaultProps = {
  scrollable: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  }
});
