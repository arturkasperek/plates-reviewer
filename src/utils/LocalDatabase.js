import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

export const db = SQLite.openDatabase("user_reports.db");

// Funkcja dodaje token do lokalnej bazy
//
// Parametry:
// id_token - unikalny token wygenerowany przy dodawaniu raportu
export const insert = (id_token) => {
  var querry = "INSERT INTO report_tokens (id_token) VALUES (?)";
  var params = [id_token];
  db.transaction((tx) => {
    tx.executeSql(
      querry,
      params,
      (tx, results) => {
        console.log(results);
        Alert.alert("Success, report was added! ");
      },
      (tx, err) => {
        console.log(err);
        Alert.alert("Something goes wrong!");
      }
    );
  });
};

// Funkcja zwraca true jeśli token jest w bazie
//
// Parametry:
// id_token - unikalny token wygenerowany przy dodawaniu raportu
//
// Przykład użycia metody:
//  findToken("x").then((value) => {
//   if (value) {
//       console.log("jest w bazie!");
//     } else {
//       console.log("nie ma w bazie!");
//     }
//   });
export const findToken = (id_token) => {
  return new Promise((resolve, reject) => {
    var querry =
      "SELECT id_token FROM report_tokens WHERE id_token = '" + id_token + "'";
    db.transaction((tx) => {
      tx.executeSql(
        querry,
        [],
        (tx, results) => {
          console.log(results.rows.length);
          if (results.rows.length != 0) {
            Alert.alert("You're able to edit and delete this! ");
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (tx, err) => {
          console.log(err);
          Alert.alert("Something goes wrong!");
        }
      );
    });
  });
};
