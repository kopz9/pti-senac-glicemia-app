import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text>main pages</Text>
      <Link href="/(tabs)/home">Dashboard</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
