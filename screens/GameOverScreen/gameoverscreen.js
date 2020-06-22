import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import DefaultStyles from "../../constants/default-styles";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>THE GAME IS OVER</Text>
      <View style={styles.imageContainer}>
        {/* <Image
          source={require("../../assets/Images/success.png")}
          style={styles.image}
        /> */}
        <Image
          source={{
            uri:
              "https://overseasadventuroustravel01.files.wordpress.com/2015/07/mountain-peaks.jpg?w=322&h=217",
          }}
          style={styles.image}
          fadeDuration={300}
        />
      </View>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderColor: "black",
    borderRadius: 150,
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
