import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="GUESS A NUMBER" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
