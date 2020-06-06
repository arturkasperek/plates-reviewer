import React, { useState } from "react";
import get from "lodash/get";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ReportCar = ({ navigation, props, route }) => {
  const imageURI = get(route, "params.imageURI");

  return (
    <View style={styles.container}>
      {imageURI && <Image style={styles.image} source={{ uri: imageURI }} />}
      <Text>Report Him!</Text>
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => {
          navigation.navigate("Camera");
        }}
      >
        <Text style={{ color: "#ffff", fontSize: 20, textAlign: "center" }}>
          Take a photo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => {
          navigation.navigate("Photo");
        }}
      >
        <Text style={{ color: "#ffff", fontSize: 20, textAlign: "center" }}>
          Select photo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEEEEE",
  },
  cameraButton: {
    width: 300,
    backgroundColor: "#1976D2",
    borderRadius: 25,
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default ReportCar;
