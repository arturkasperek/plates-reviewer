import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { insert } from "../utils/LocalDatabase";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import * as API from "../utils/API";
import { TextInput } from "react-native-gesture-handler";
import carImagePlaceholder from '../media/car-placeholder.png';

const ReportCar = ({ navigation, props, route }) => {
  const imageURI = get(route, "params.imageURI");
  const [platesNumber, setPlatesNumber] = useState("");
  const [mediaUrl, setMediaUrl] = useState();
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [submitInProgress, setSubmitInProgress] = useState(false);

  const submitReport = async (lat, long, mediaUrl, plateNumber) => {
    try {
      const fetchedReport = await API.createReport(lat, long, mediaUrl, plateNumber);
      console.log('fetchedReport is ', fetchedReport);
    } catch (err) {
      console.error("Err: ", err);
    }
  };

  useEffect(() => {
    const loadImage = async () => {
      const photo = {
        uri: imageURI,
        type: "image/jpeg",
        name: "photo.jpg",
      };

      try {
        setSubmitInProgress(true);
        const fetchedReport = await API.uploadCarImage(photo);
        if (fetchedReport) {
          setPlatesNumber(fetchedReport.platesProposal);
          setMediaUrl(fetchedReport.url);
        }
      } catch (err) {
        console.error("Err: ", err);
      }

      setSubmitInProgress(false);
    };

    if (imageURI) {
      loadImage();
    }
  }, [imageURI]);

  return (
    <Layout>
      <View style={styles.container}>
        <View style={{
          ...styles.imageContainer,
          ...imageURI ? {
            borderWidth: 0,
          } : {},
        }}>
          {!imageURI && (
            <Image source={carImagePlaceholder} style={styles.imageHolder}/>
          )}
          {imageURI && <Image style={styles.imageHolder} source={{ uri: imageURI }} />}
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            style={styles.firstButton}
            onPress={() => navigation.navigate("Camera")}
            title={"Take a photo"}
          />
          <Button
            onPress={() => navigation.navigate("Photo")}
            title={"Select a photo"}
          />
        </View>
        {submitInProgress && (
          <ActivityIndicator size="large" color="#f2be12" />
        )}
        <Text>Plates numbers:</Text>
        <Input
          onChangeText={setPlatesNumber}
          value={platesNumber}
          placeholder={'Plates number ...'}
        />
        <Text>Latitude:</Text>
        <Input
          onChangeText={setLat}
          value={lat}
          placeholder={'Latitude ...'}
        />
        <Text>Longitude:</Text>
        <Input
          onChangeText={setLong}
          value={long}
          placeholder={'Longitude ...'}
        />
        <Button
          onPress={() => submitReport(lat, long, mediaUrl, platesNumber)}
          title={"Report!"}
        />

        {/* Poniższy 'przycisk' jest do susunięcia,
          doodany tylko w celu testowania metody dodającej token do bazy */}
        <Button style={{marginTop: 10}} onPress={() => insert("x")} title={"Add to SQLLite"} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  firstButton: {
    marginBottom: 20,
  },
  buttonWrapper: {
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    borderWidth: 3,
    borderRadius: 1,
    borderColor: '#9E9E9E',
    borderStyle: 'dashed',
    marginBottom: 20,
  },
  imageHolder: {
    width: '100%',
    height: 200,
  },
  container: {
    flex: 1,
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default ReportCar;
