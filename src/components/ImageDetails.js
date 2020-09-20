import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetailsComponent = (props) => {
    console.log("<-- props from image details -->", props);
    return (
        <View>
            <Image source={props.imageSource}></Image>
            <Text> {props.title} </Text>
            <Text> Image Score - {props.imageScore} </Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageDetailsComponent;