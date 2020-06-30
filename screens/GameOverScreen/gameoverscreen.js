import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import DefaultStyles from "../../constants/default-styles";
import Colors from "../../constants/colors";
import MainButton from "../../components/main-button/main-button";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>THE GAME IS OVER</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/Images/success.png")}
            style={styles.image}
          />
          {/* <Image
          source={{
            uri:
              "https://overseasadventuroustravel01.files.wordpress.com/2015/07/mountain-peaks.jpg?w=322&h=217",
          }}
          style={styles.image}
          fadeDuration={300}
        /> */}
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            <Text style={DefaultStyles.bodyText}>
              Your phone needed{" "}
              <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds
              to get the number{" "}
              <Text style={styles.highlight}>{props.userNumber}</Text>
            </Text>
          </Text>
        </View>

        <MainButton onPress={props.restartGame}>RESTART</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderColor: "black",
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginVertical: Dimensions.get("window").height / 40,
    marginHorizontal: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
