import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const SelectPhotoScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [hasPermissions, setHasPermissions] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
        setHasPermissions(true);
        pickImage();
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        //aspect: [16, 9],
        quality: 1,
      });

      if (!result.cancelled) {
        navigation.navigate("ReportCar", {
          imageURI: result.uri,
        });
        setImage(result.uri);
      }
    } catch (e) {
      console.error("Error during selecting image", e);
    }
  };

  if (!hasPermissions) {
    return <View />;
  } else {
    return (
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} />}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SelectPhotoScreen;
