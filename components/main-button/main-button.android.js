import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../../constants/colors";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 15,
  },
});

export default MainButton;
