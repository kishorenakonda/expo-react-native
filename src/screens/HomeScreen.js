import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}> Welcome to Home Screen </Text>
      <Button title="Component"></Button>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
