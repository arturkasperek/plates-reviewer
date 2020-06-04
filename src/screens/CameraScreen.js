import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

const cameraScreen = ({navigation}) => {
  let cameraRef = useRef(null);
  const [camType, setCamType] = useState(RNCamera.Constants.Type.back);
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);

  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  const flipCamera = () => {
    if (camType === RNCamera.Constants.Type.back) {
      setCamType(RNCamera.Constants.Type.front);
    } else {
      setCamType(RNCamera.Constants.Type.back);
    }
  };

  const toggleFlash = () => {
    if (flash === RNCamera.Constants.flashMode.off) {
      setFlash(RNCamera.Constants.flashMode.on);
    } else {
      setFlash(RNCamera.Constants.flashMode.off);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={camType}
        flashMode={flash}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <View style={styles.buttonsArea}>
          <TouchableOpacity
            onPress={() => toggleFlash()}
            style={styles.capture}>
            <Text style={styles.buttonText}> flash </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => takePicture()}
            style={styles.capture}>
            <Text style={styles.buttonText}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => flipCamera()} style={styles.capture}>
            <Text style={styles.buttonText}> type </Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsArea: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

/*
const ReportCar = navigation => {
  return (
    <View style={styles.container}>
      <Text>Report Him!</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6A92A',
  },
});
*/

export default cameraScreen;
