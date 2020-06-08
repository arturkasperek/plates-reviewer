import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { findToken } from "../utils/LocalDatabase";
import { Layout } from "../components/Layout";

const Details = ({ route, navigation }) => {
  const [editable = false, setEditable] = useState();
  const { platesNumber } = route.params;
  const { id } = route.params;
  const { comment } = route.params;
  const { long } = route.params;
  const { lat } = route.params;
  const { mediaURL } = route.params;
  const { createdAt } = route.params;
  const { updatedAt } = route.params;

  useEffect(() => {
    findToken("abc").then((value) => {
      setEditable(value);
    });
  }, []);

  return (
    <Layout>
      <View>
        <Image style={styles.image} source={{ uri: mediaURL }} />
        <Text>plates number: {platesNumber}</Text>
        <Text>id: {id}</Text>
        <Text>comment: {comment}</Text>
        <Text>created At: {createdAt}</Text>
        <Text>updated At:{updatedAt}</Text>
        {/* Przykład użycia (wystarczy podstawić button w miejsce "możesz edytować" i id w miejsce "abc" w findToken) */}
        {editable ? (
          <Text>możesz edytować</Text>
        ) : (
          <Text>nie możesz edytować</Text>
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#E6A92A",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default Details;
