import { View, Text, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import React, { useEffect, useState } from "react";

const home = () => {
  const [glicemiaData, setGlicemiaData] = useState([]);
  const [lastGlicemia, setLastGlicemia] = useState(null);
  const [status, setStatus] = useState("Normal");
  const [lastMeasurementTime, setLastMeasurementTime] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8080/glicemia/user/1");

      const result = await response.json();
      if (result.length > 0) {
        setGlicemiaData(result);
        const lastMeasurement = result[result.length - 1];
        setLastGlicemia(lastMeasurement.valorGlicemia);
        setLastMeasurementTime(lastMeasurement.dataHora);
        setStatus(getStatus(lastMeasurement.valorGlicemia));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getStatus = (value) => {
    if (value < 70) return "Baixo";
    if (value > 140) return "Alto";
    return "Normal";
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Ultima Glicemia Medida</Text>
        <Text style={styles.title}>
          {lastGlicemia !== null ? `${lastGlicemia} mg/dl` : "Carregando..."}
        </Text>
        <Text style={styles.titleStatus}>{status}</Text>
      </View>
      <View style={styles.recent}>
        <Text style={styles.title}>Medidas Recentes</Text>
      </View>
      <View style={styles.results}>
        {glicemiaData.slice(0, 3).map((mesuarement, index) => (
          <View key={index} style={styles.area}>
            <Text style={styles.resultsTitle}>{mesuarement.valorGlicemia}</Text>
            <Text style={styles.resultsDate}>{mesuarement.dataHora}</Text>
          </View>
        ))}
      </View>
      <View style={styles.percentage}>
        <Text style={styles.percentageTitle}>Porcentagem de Saúde</Text>
        <CircularProgress
          value={lastGlicemia || 85}
          radius={80}
          title={`${lastGlicemia || 0} de 100`}
          progressValueColor={"#000"}
          activeStrokeColor={"#FF9999"}
          titleColor={"#000"}
          titleStyle={{ fontWeight: "bold" }}
        />
        <Text style={styles.percentageSecondaryTitle}>
          *Calculado com base nas medidas recentes
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
