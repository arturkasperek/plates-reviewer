import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { insert, findToken } from "../utils/LocalDatabase";

// Przykład użycia metody sprawdzxajacej czy istneije token
const pri = () => {
  findToken("x").then((value) => {
    if (value) {
      console.log("jest w bazie!");
    } else {
      console.log("nie ma w bazie!");
    }
  });
};

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
      {/* Poniższy 'przycisk' jest do susunięcia, 
          doodany tylko w celu testowania metody dodającej token do bazy */}
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => {
          insert("x");
        }}
      >
        <Text style={{ color: "#ffff", fontSize: 20, textAlign: "center" }}>
          Add
        </Text>
      </TouchableOpacity>
      {/* Poniższy 'przycisk' jest do susunięcia, 
          doodany tylko w celu testowania metody dodającej token do bazy */}
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => {
          pri();
        }}
      >
        <Text style={{ color: "#ffff", fontSize: 20, textAlign: "center" }}>
          Find
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
