import React, { useState, useEffect, useRef } from "react";
import {View, StyleSheet, StatusBar, ScrollView, ActivityIndicator} from "react-native";
import get from 'lodash/get';
import debounce from 'lodash/debounce';
import * as API from "../utils/API";
import ReportList from "../components/ReportList";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import {Input} from "../components/Input";

const Main = ({ route, navigation }) => {
  const reload = get(route, 'params.reload', false);
  const isFirstRun = useRef(true);
  const [search, setSearch] = useState('');
  const [report, setReport] = useState();
  const [inProgress, setInProgress] = useState(false);

  const getAllReports = async (search) => {
    try {
      setInProgress(true);
      const fetchedReport = await API.getAllReport(search);
      if (fetchedReport) {
        setReport(fetchedReport.result);
      }
      setInProgress(false);
    } catch (err) {
      console.error("Err: ", err);
    }
  };

  const debouncedQuery = debounce((search) => {
    getAllReports(search);
  }, 1000);
  const debounceRef = useRef(debouncedQuery);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    debounceRef.current(search);
  }, [search]);

  useEffect(() => {
    if ( reload === true ) {
      getAllReports(search);
    }
  }, [reload]);

  useEffect(() => {
    getAllReports(search);
  }, []);

  return (
    <Layout scrollable={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#3700B3" />
        <Input placeholder={'Search ...'} value={search} onChangeText={setSearch}/>
        <View style={styles.listWrapper}>
          {!inProgress && (
            <ReportList report={report} navigation={navigation} />
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
