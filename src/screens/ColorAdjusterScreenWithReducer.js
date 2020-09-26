import React, { useReducer } from "react";
import { Text, View } from "react-native";

import ColorCounterComponent from "../components/ColorCounter";

var externalStyles = require('../css/common-styles');
const COLOR_INCREMENT = 15;
const myReducerFunction = (stateObj, action) => {
    // stateObj === { red: number, green: number, blue: number }
    // action === {colorToChange: 'red' || 'green' || 'blue' , amount: 15 || -15}
    switch (action.colorToChange) {
        case 'red':
            // we are taking the existing property of stateObj and updating the variable based on the case
            return { ...stateObj, red: stateObj.red = stateObj.red + action.amount };
        case 'green':
            if (stateObj.green + action.amount > 255 || stateObj.green + action.amount < 0) {
                return stateObj;
            } else {
                return { ...stateObj, green: stateObj.green = stateObj.green + action.amount };
            }
        case 'blue':
            return (stateObj.blue + action.amount > 255 || stateObj.blue + action.amount < 0)
                ? stateObj : { ...stateObj, blue: stateObj.blue = stateObj.blue + action.amount };
        default:
            return stateObj;
    }
}

// Different Between useState and useReducer
// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values 
// or when the next state depends on the previous one. 
// useReducer also lets you optimize performance for components that trigger deep updates 
// because you can pass dispatch down instead of callbacks.

const ColorAdjusterScreenWithReducer = () => {
    // const [state, dispatch]
    // state holds the value
    // dispatch holds the object used to access the method 
    const colorObj = { red: 0, green: 0, blue: 0 }; // Initializing the variables
    const [state, runMyReducerFunction] = useReducer(myReducerFunction, colorObj);
    const { red, green, blue } = state;
    return (
        <View>
            <Text> Welcome to Color Adjuster Screen </Text>
            <ColorCounterComponent color="Red"
                onIncrease={() => {
                    runMyReducerFunction({ colorToChange: 'red', amount: COLOR_INCREMENT });
                }}
                onDecrease={() => {
                    runMyReducerFunction({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT });
                }}
            />

            <ColorCounterComponent color="Green"
                onIncrease={() => {
                    runMyReducerFunction({ colorToChange: 'green', amount: COLOR_INCREMENT });
                }}
                onDecrease={() => {
                    runMyReducerFunction({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT });
                }}
            />

            <ColorCounterComponent color="Blue"
                onIncrease={() => {
                    runMyReducerFunction({ colorToChange: 'blue', amount: COLOR_INCREMENT });
                }}
                onDecrease={() => {
                    runMyReducerFunction({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT });
                }}
            />

            <View style={externalStyles.m_t_10}>
                <View style={{ height: 150, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
            </View>
        </View >
    )
};

export default ColorAdjusterScreenWithReducer;
