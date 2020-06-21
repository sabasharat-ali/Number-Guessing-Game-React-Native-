import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import DefaultStyles from "../../constants/default-styles";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>THE GAME IS OVER</Text>
      <Text style={DefaultStyles.bodyText}>
        Your number was: {props.userNumber}
      </Text>
      <Text style={DefaultStyles.bodyText}>
        No of rounds taken: {props.roundsNumber}
      </Text>
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
