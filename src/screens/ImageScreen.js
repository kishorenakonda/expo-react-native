import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ImageDetailsComponent from "../components/ImageDetails";

const ImageScreen = () => {
    const imageList = [
        {
            id: '1',
            title: 'Forest',
            imageSource: require('../../assets/images/forest.jpg'),
            imageScore: 9
        },
        {
            id: '2',
            title: 'Beach',
            imageSource: require('../../assets/images/beach.jpg'),
            imageScore: 7
        },
        {
            id: '3',
            title: 'Mountain',
            imageSource: require('../../assets/images/mountain.jpg'),
            imageScore: 5
        }
    ];

    return (
        <View>
            <Text> Image List </Text>
            <Text> ========= </Text>

            {/* <ImageDetailsComponent title="Forest"
                imageSource={require('../../assets/images/forest.jpg')}
                imageScore={9} >
            </ImageDetailsComponent>

            <ImageDetailsComponent title="Beach"
                imageSource={require('../../assets/images/beach.jpg')}
                imageScore={7} >
            </ImageDetailsComponent>

            <ImageDetailsComponent title="Mountain"
                imageSource={require('../../assets/images/mountain.jpg')}
                imageScore={5}>
            </ImageDetailsComponent> */}

            {/* in keyExtractor the key should be of string */}
            <FlatList
                keyExtractor={(imageListObj) => imageListObj.id}
                data={imageList}
                renderItem={({ item }) => {
                    return (
                        <ImageDetailsComponent title={item.title}
                            imageSource={item.imageSource} imageScore={item.imageScore}>
                        </ImageDetailsComponent>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageScreen;