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

import { Layout } from "../components/Layout";
import { Button } from "../components/Button";

const ReportCar = ({ navigation, props, route }) => {
  const imageURI = get(route, "params.imageURI");

  return (
    <Layout>
      <View style={styles.container}>
        {imageURI && <Image style={styles.image} source={{ uri: imageURI }} />}
        <Text>Report Him!</Text>
        <Button
          onPress={() => navigation.navigate("Camera")}
          title={"Take a photo"}
        />
        <Button
          onPress={() => navigation.navigate("Photo")}
          title={"Select photo"}
        />
        {/* Poniższy 'przycisk' jest do susunięcia, 
          doodany tylko w celu testowania metody dodającej token do bazy */}
        <Button onPress={() => insert("x")} title={"Add"} />
        {/* Poniższy 'przycisk' jest do susunięcia, 
          doodany tylko w celu testowania metody spr czy dany token jest w bazie */}
        <Button onPress={() => pri()} title={"Find"} />
      </View>
    </Layout>
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
