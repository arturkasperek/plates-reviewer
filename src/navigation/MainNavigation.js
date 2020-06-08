import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import ReportCar from "../screens/ReportCar";
import Details from "../screens/Details";
import CameraScreen from "../screens/CameraScreen";
import SelectPhotoScreen from "../screens/SelectPhotoScreen";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ReportCar" component={ReportCar} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Photo" component={SelectPhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
