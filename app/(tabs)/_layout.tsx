import { View, Text, Image, StyleSheet } from "react-native";
import { Tabs, Redirect } from "expo-router";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#161612",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopColor: "#CDCDE0",
            borderTopWidth: 1,
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: () => (
              <Image
                style={styles.tabBarIcon}
                source={require("../../assets/tear.png")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Dashboard",
            headerShown: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarIcon: () => (
              <Image
                style={styles.tabBarIcon}
                source={require("../../assets/sshome.png")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: () => (
              <Image
                style={styles.tabBarIcon}
                source={require("../../assets/profile_icon.png")}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 32,
    height: 32,
  },
});

export default TabsLayout;
