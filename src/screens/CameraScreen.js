import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

const cameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camType, setCamType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
      );
      if (status === "granted") return setHasPermission("granted");
    })();
  }, []);

  const takePicture = async () => {
    if (hasPermission === "granted") {
      const options = { quality: 0.5, base64: true };
      const data = await hasPermission.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  const flipCamera = () => {
    if (camType === Camera.Constants.Type.back) {
      setCamType(Camera.Constants.Type.front);
    } else {
      setCamType(Camera.Constants.Type.back);
    }
  };

  const toggleFlash = () => {
    if (flash === Camera.Constants.flashMode.off) {
      setFlash(Camera.Constants.flashMode.on);
    } else {
      setFlash(Camera.Constants.flashMode.off);
    }
  };

  if (hasPermission === null) {
    return <View />;
  } else {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.preview}
          type={camType}
          flashMode={flash}
          ref={(ref) => {
            setHasPermission(ref);
          }}
        >
          <View style={styles.buttonsArea}>
            <TouchableOpacity
              onPress={() => toggleFlash()}
              style={styles.capture}
            >
              <Text style={styles.buttonText}> flash </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => takePicture()}
              style={styles.capture}
            >
              <Text style={styles.buttonText}> SNAP </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => flipCamera()}
              style={styles.capture}
            >
              <Text style={styles.buttonText}> type </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsArea: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
});

export default cameraScreen;
