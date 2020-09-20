import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    return (
        <View>
            <Text style={styles.text}> Component Screen </Text>
            <Text style={styles.text}> This is my first App </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ComponentScreen;
