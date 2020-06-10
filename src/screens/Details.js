import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { findToken } from "../utils/LocalDatabase";
import { Layout } from "../components/Layout";
import html_map from "../components/Map";
import {WebView} from "react-native-webview";

const Details = ({ route, navigation }) => {
  const { platesNumber } = route.params;
  const { id } = route.params;
  const { comment } = route.params;
  const { long } = route.params;
  const { lat } = route.params;
  const { mediaURL } = route.params;
  const { createdAt } = route.params;
  const { updatedAt } = route.params;

  return (
    <Layout>
      <View>
        <Image style={styles.image} source={{ uri: mediaURL }} />
        <View style={styles.row}><Text style={styles.label}>Plates number: </Text><Text style={styles.value}>{platesNumber}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Comment: </Text><Text style={styles.value}>{comment}</Text></View>
        <View style={styles.mapWrapper}>
          <WebView
            source={{ html: html_map(lat, long, 9) }}
            style={styles.mapItem}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mapWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },
  mapItem: {
    alignSelf: "center",
    height: 200,
    width: '100%',
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  value: {
    fontSize: 18,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#E6A92A",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default Details;
