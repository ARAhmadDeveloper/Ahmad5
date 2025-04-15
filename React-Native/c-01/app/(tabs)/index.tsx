import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from "react-native";



function HomeScreen() {

  const isDarkMode = useColorScheme() === "dark";


  return (
    <View
    style={styles.container}
    >
      <Text
       style={isDarkMode ? styles.lightText : styles.darkText}
      >Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    opacity: 0.9,
  },
  lightText: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    borderStyle: "solid",
    overflow: "hidden",
  },
  darkText: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
});

export default HomeScreen