import React, { useState } from "react";
import { Text, View } from "react-native";

// File Import within curly brace will be considering it as library content
// import { ColorCounterComponent } from "../components/ColorCounter";
import ColorCounterComponent from "../components/ColorCounter";

var externalStyles = require('../css/common-styles');

const ColorAdjusterScreen = () => {
    const COLOR_INCREMENT = 15;
    // first argument is variable and second argument is the setter method
    // No one callback Method is allowed for a variable
    // const [red, setRed, removeRed] = useState(0);

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    // console.log("red", red);
    // console.log("green", green);
    // console.log("blue", blue);

    // You can use common method to update the value for the variable
    const setColor = (color, colorIncrementValue) => {
        // color === 'red', 'green', 'blue'
        // colorIncrementValue === value present inside COLOR_INCREMENT variable (+15 or -15 as of now)
        if (color === 'green') {
            if (green + colorIncrementValue > 255 || green + colorIncrementValue < 0) {
                return;
            } else {
                setGreen(green + colorIncrementValue)
            }
        } else if (color === 'blue') {
            // if (blue + colorIncrementValue > 255 || blue + colorIncrementValue < 0) {
            //     return;
            // } else {
            //     setBlue(blue + colorIncrementValue)
            // }

            // Instead of writing a big if else ladder you can change it to ternary operator
            (blue + colorIncrementValue > 255 || blue + colorIncrementValue < 0) ? null : setBlue(blue + colorIncrementValue);
        }
    }

    return (
        <View>
            <Text> Welcome to Color Adjuster Screen </Text>
            <ColorCounterComponent color="Red"
                onIncrease={() => {
                    if (red + COLOR_INCREMENT <= 255) {
                        setRed(red + COLOR_INCREMENT)
                    }
                }}
                onDecrease={() => {
                    if (red - COLOR_INCREMENT >= 0) {
                        setRed(red - COLOR_INCREMENT)
                    }
                }}
            />

            <ColorCounterComponent color="Green"
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            />

            <ColorCounterComponent color="Blue"
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => {
                    if (blue - COLOR_INCREMENT >= 0) {
                        setBlue(blue - COLOR_INCREMENT)
                    }
                }}
            />

            <View style={externalStyles.m_t_10}>
                <View style={{ height: 150, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
            </View>
        </View >
    )
};

export default ColorAdjusterScreen;
