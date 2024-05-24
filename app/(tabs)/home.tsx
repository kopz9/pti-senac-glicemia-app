import { View, Text, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import React from "react";

const home = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Ultima Glicemia Medida</Text>
        <Text style={styles.title}>85 mg/dl</Text>
        {/* valor deve vir da ultima glicemia */}
        <Text style={styles.titleStatus}>Normal</Text>
        {/* resultado deve vir da ultima glicemia */}
      </View>
      <View style={styles.recent}>
        <Text style={styles.title}>Medidas Recentes</Text>
      </View>
      <View style={styles.results}>
        <View style={styles.area}>
          <Text style={styles.resultsTitle}>85</Text>
          <Text style={styles.resultsDate}>12/01/2024</Text>
          {/* resultado deve vir da ultima glicemia */}
        </View>
        <View style={styles.area}>
          <Text style={styles.resultsTitle}>85</Text>
          <Text style={styles.resultsDate}>12/01/2024</Text>
          {/* resultado deve vir da ultima glicemia */}
        </View>
        <View style={styles.area}>
          <Text style={styles.resultsTitle}>85</Text>
          <Text style={styles.resultsDate}>12/01/2024</Text>
          {/* resultado deve vir da ultima glicemia */}
        </View>
      </View>
      <View style={styles.percentage}>
        <Text style={styles.percentageTitle}>Porcentagem de Saúde</Text>
        <CircularProgress
          value={85}
          radius={80}
          title={"85 de 100"}
          progressValueColor={"#000"}
          activeStrokeColor={"#FF9999"}
          titleColor={"#000"}
          titleStyle={{ fontWeight: "bold" }}
        />
        <Text style={styles.percentageSecondaryTitle}>
          *Calculado com base nas meedidas reecentes
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    height: 120,
    width: "100%",
    backgroundColor: "#FF9999",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleStatus: {
    color: "#05FF00",
    fontSize: 20,
    fontWeight: "bold",
  },
  recent: {
    marginTop: 10,
  },
  area: {
    height: 100,
    width: 100,
    backgroundColor: "#FF9999",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  results: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginRight: 32,
  },
  resultsTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
  resultsDate: {
    color: "#fff",
    marginTop: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  percentage: {
    alignItems: "center",
    justifyContent: "center",
  },
  percentageTitle: {
    fontSize: 26,
    marginBottom: 10,
    fontWeight: "bold",
  },
  percentageSecondaryTitle: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default home;
