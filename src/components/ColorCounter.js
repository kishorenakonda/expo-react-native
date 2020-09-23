import React from "react";
import { Text, View, Button } from "react-native";

const ColorCounterComponent = ({ color, onIncrease, onDecrease }) => {
    // console.log("<-- props from color counter -->", props);
    return (
        <View>
            <Text> {color} </Text>
            {/* title="increase red" */}
            <Button title={`Increase ${color}`}
                onPress={() => {
                    onIncrease()
                }}>
            </Button>
            <Button title={`Decrease ${color}`}
                onPress={() => {
                    onDecrease()
                }}>
            </Button>
        </View>
    )
}

export default ColorCounterComponent;