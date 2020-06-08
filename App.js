import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import MainNavigation from "./src/navigation/MainNavigation";
import { db } from "./src/utils/LocalDatabase";

const App = () => {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists report_tokens (id_token text primary key not null);",
        [],
        (tx, results) => {
          console.log(results);
        },
        (tx, err) => {
          console.log(err);
        }
      );
    });
  }, []);
  return <MainNavigation />;
};

export default App;
