import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  SectionList,
  Button,
} from "react-native";



function HomeScreen() {
  return (
    <View
    style={styles.container}
    >
      <Text
       
      >Home Screen</Text>
      {/* create a stylish button */}
      <Button
        title="Press me"
        style={styles.button}
        color="#841584"
        accessibilityLabel="Tap me to see an alert"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  button: {
    backgroundColor: "#841584",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen