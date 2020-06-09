import React, { useState, useEffect } from "react";
import {View, StyleSheet, StatusBar, ScrollView, ActivityIndicator} from "react-native";
import get from 'lodash/get';
import * as API from "../utils/API";
import ReportList from "../components/ReportList";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";

const Main = ({ route, navigation }) => {
  const reload = get(route, 'params.reload', false);
  const [report, setReport] = useState();
  const [inProgress, setInProgress] = useState(false);

  const getAllReports = async () => {
    try {
      setInProgress(true);
      const fetchedReport = await API.getAllReport();
      if (fetchedReport) {
        setReport(fetchedReport.result);
      }
      setInProgress(false);
    } catch (err) {
      console.error("Err: ", err);
    }
  };

  useEffect(() => {
    getAllReports();
  }, []);

  useEffect(() => {
    if ( reload === true ) {
      getAllReports();
    }
  }, [reload]);

  return (
    <Layout scrollable={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#3700B3" />
        <View style={styles.listWrapper}>
          {!inProgress && (
            <ReportList report={report} navi={navigation} />
          )}
          {inProgress && (
            <ActivityIndicator size="large" color="#f2be12" />
          )}
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
