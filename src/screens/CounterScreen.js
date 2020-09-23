// {React , useState} // not applicable , it is throwing error and not rendering the page
import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";

// External Stylesheet
var styles = require('../css/common-styles');

const CounterScreen = () => {
    // bad way of writing code , which will not update the content in the screen
    // let counter = 0;

    // useState will intialize the variable with default value
    // counter : variable which holds the value
    // setCounter : method which is used to modify the state of the variable
    const [counter, setCounter] = useState(0);

    return (
        // instead of <div> tag we have <View> tag for new block
        <View>
            <View>
                <Text style={styles.text}> Counter Screen </Text>
            </View>

            <View style={styles.m_t_10}>
                <Button title="Increment"
                    onPress={() => {
                        // counter++;
                        setCounter(counter + 1);
                        console.log("increase counter", counter);
                    }}>
                </Button>
            </View>

            <View style={styles.m_t_10}>
                <Button title="Decrement"
                    onPress={() => {
                        // counter--;
                        setCounter(counter - 1);
                        console.log("decrease counter", counter);
                    }}>
                </Button>
            </View>

            <View style={styles.m_t_20}>
                <View style={styles.text_center}>
                    <Text> Counter Value : </Text>
                    <Text style={styles.text}> {counter} </Text>
                </View>
            </View>
        </View>
    )
};

// Instead of writing internal stylesheet it is moved to external style sheet
// const styles = StyleSheet.create({
//     text: {
//         fontSize: 20
//     },
//     m_t_10: {
//         marginTop: 10
//     },
//     m_t_20: {
//         marginTop: 20
//     }
// });

export default CounterScreen;
