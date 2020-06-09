import React, { useState } from "react";
import get from "lodash/get";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import * as API from "../utils/API";
import { TextInput } from "react-native-gesture-handler";

const ReportCar = ({ navigation, props, route }) => {
  const imageURI = get(route, "params.imageURI");
  const [plateNumber, setplateNumber] = useState("none");
  const [mediaUrl, setMediaUrl] = useState();
  const [lat, setLat] = useState("40");
  const [long, setLong] = useState("40");

  var photo = {
    uri: imageURI,
    type: "image/jpeg",
    name: "photo.jpg",
  };

  const setCarImg = async (img) => {
    try {
      const fetchedReport = await API.setCarImage(img);
      if (fetchedReport) {
        setplateNumber(fetchedReport.platesProposal);
        setMediaUrl(fetchedReport.url);
      }
    } catch (err) {
      console.error("Err: ", err);
    }
  };

  const submitReport = async (p1, p2, p3, p4) => {
    try {
      const fetchedReport = await API.setReport(p1, p2, p3, p4);
    } catch (err) {
      console.error("Err: ", err);
    }
  };

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
        <Button onPress={() => setCarImg(photo)} title={"check photo"} />
        <Text>plate proposal:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setplateNumber(text)}
          value={plateNumber}
        />
        <Text>lat:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setLat(text)}
          value={lat}
        />
        <Text>long:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setLong(text)}
          value={long}
        />
        <Button
          onPress={() => submitReport(lat, long, mediaUrl, plateNumber)}
          title={"submit report"}
        />
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
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default ReportCar;
