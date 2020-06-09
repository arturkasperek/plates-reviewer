import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import MainNavigation from "./src/navigation/MainNavigation";
import { localDBinit } from "./src/utils/LocalDatabase";

const App = () => {
  useEffect(() => {
    localDBinit();
  }, []);
  return <MainNavigation />;
};

export default App;
