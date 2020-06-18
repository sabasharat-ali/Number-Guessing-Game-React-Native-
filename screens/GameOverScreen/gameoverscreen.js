import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>THE GAME IS OVER</Text>
      <Text>Your number was: {props.userNumber}</Text>
      <Text>No of rounds taken: {props.roundsNumber}</Text>
      <Button title="Restart" onPress={props.restartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameOverScreen;
