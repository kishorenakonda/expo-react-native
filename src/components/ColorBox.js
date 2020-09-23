import React from "react";
import { View } from "react-native";

var externalStyles = require('../css/common-styles');

const ColorBoxComponent = (props) => {
    console.log("<-- props from color box -->", props);
    return (
        <View style={externalStyles.m_t_10}>
            <View
                style={{ height: 100, width: 100, backgroundColor: props.colorCode }}>
            </View>
        </View>
    );
}

export default ColorBoxComponent;