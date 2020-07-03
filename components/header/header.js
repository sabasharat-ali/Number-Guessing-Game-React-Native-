import React from "react";

import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style = {styles.text}>
        <Text style={styles.headerTitle}>{props.title}</Text>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'android' ? 0 : 1
  },

  headerTitle: {
    color: "black",
    fontSize: 18,
  },

  text: {
    color: Platform.OS === 'ios' ? Colors.primary: 'white'
  }
});

export default Header;
