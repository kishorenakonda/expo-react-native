import React, { useState } from "react";
import { FlatList } from "react-native";
import { View, Button } from "react-native";
import ColorBoxComponent from "../components/ColorBox";

var externalStyles = require('../css/common-styles');

const ColorsScreen = () => {
    const [colors, setColors] = useState([]);
    console.log("colors array", colors);

    return (
        <View>
            {/* ... (triple dot) is known as spread operator */}
            <Button title="add a color"
                onPress={() => {
                    // if i use triple dot it will update the details is the same array
                    setColors([...colors, generateRandomColor()])

                    // if i use the below syntax it will generate a new array and push to the color array
                    // setColors([colors, generateRandomColor()])
                }}>
            </Button>

            {/* <View style={externalStyles.m_t_10}>
                <View
                    style={{ height: 100, width: 100, backgroundColor: generateRandomColor() }}>
                </View>
            </View> */}

            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    return (<ColorBoxComponent colorCode={item}></ColorBoxComponent>)
                }}
            />
        </View>

    )
}

const generateRandomColor = () => {
    const redColor = Math.floor(Math.random() * 256);
    const greenColor = Math.floor(Math.random() * 256);
    const blueColor = Math.floor(Math.random() * 256);

    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

export default ColorsScreen;