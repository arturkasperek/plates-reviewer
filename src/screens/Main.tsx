import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList, Image} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

import * as API from '../utils/API';

import ReportList from '../components/ReportList';

interface Props {
  navigation: NavigationStackProp<{}>;
}

const Main = ({navigation}: Props) => {
  const [buttonText] = useState('Report Car');
  const [report, setReport] = useState();
  const [test, settest] = useState();

  const getAllReports = async () => {
    try {
      const fetchedReport = await API.getAllReport();
      if (fetchedReport) {
        setReport(fetchedReport.result);
      }
    } catch (err) {
      settest(err);
    }
  };

  useEffect(() => {
    getAllReports();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3700B3" />
      <View style={{marginTop: 10}}>
        <ReportList report={report} navi={navigation} />
      </View>
      <View style={styles.reportCont}>
        <TouchableOpacity
          style={styles.reportButton}
          onPress={() => {
            navigation.navigate('ReportCar');
          }}>
          <Text style={styles.reportButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  reportCont: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  reportButton: {
    width: 300,
    backgroundColor: '#EF6C00',
    borderRadius: 25,
    paddingVertical: 10,
    marginVertical: 10,
  },
  reportButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Main;
