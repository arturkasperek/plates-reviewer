import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import * as API from "../utils/API";
import ReportList from "../components/ReportList";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";

const Main = ({ route, navigation }) => {
  const [report, setReport] = useState();

  const getAllReports = async () => {
    try {
      const fetchedReport = await API.getAllReport();
      if (fetchedReport) {
        setReport(fetchedReport.result);
      }
    } catch (err) {
      console.error("Err: ", err);
    }
  };

  useEffect(() => {
    getAllReports();
  }, []);

  return (
    <Layout scrollable={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#3700B3" />
        <View style={styles.listWrapper}>
          <ReportList report={report} navi={navigation} />
        </View>
        <View style={styles.reportBar}>
          <Button
            onPress={() => navigation.navigate("ReportCar")}
            title={"Report Car"}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listWrapper: {
    flex: 1,
  },
  reportBar: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Main;
