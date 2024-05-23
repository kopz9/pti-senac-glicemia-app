import { View, Text, StyleSheet } from "react-native";
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
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#161622",
  },
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
});

export default home;
