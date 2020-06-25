import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../../components/number-container/number-container";
import Card from "../../components/card/card";
import MainButton from "../../components/main-button/main-button";
import DefaultStyles from "../../constants/default-styles";

const randomNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return randomNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const renderListItem = (value, numOfRound) => (
  <View key={value} style={styles.listItem}>
    <Text style={DefaultStyles.bodyText}>#{numOfRound}</Text>
    <Text style={DefaultStyles.bodyText}>{value}</Text>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = randomNumberBetween(1, 100, props.UserChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState(0);
  const [pastGuess, setPastGuess] = useState([initialGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { UserChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === UserChoice) {
      onGameOver(pastGuess.length);
    }
  }, [currentGuess, UserChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.UserChoice) ||
      (direction === "greater" && currentGuess > props.UserChoice)
    ) {
      Alert.alert("Dont Lie", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextGuess = randomNumberBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    // setRounds((currentRound) => currentRound + 1);
    setPastGuess((pastGuesses) => [nextGuess, ...pastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text>OPPONENT'S GUESS</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuess.map((guess, index) => renderListItem(guess, index + 1))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    maxWidth: "80%",
    width: 300,
  },
  list: {
    width: "80%",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default GameScreen;
