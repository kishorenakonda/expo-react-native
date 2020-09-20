import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const WelcomeScreen = ({ navigation }) => {
    // console.log("from welcome screen ==>", props);
    // props is parent object
    // navigation is one of the property in the props, 
    // and if we give inside { } bracket it is considered as destruction method
    return (
        <View>
            <Text style={styles.text}> Welcome to Image Library App </Text>
            <Button
                onPress={() => {
                    console.log("Clicked on HOME Button")
                    // props.navigation.navigate('Home')
                    navigation.navigate('Home')
                }}
                style={styles.m_t_10} title="go to home">
            </Button>

            <Button
                onPress={() => {
                    console.log("Clicked on List Button")
                    navigation.navigate('List')
                }}
                style={styles.m_t_10} title="go to name list">
            </Button>

            <Button
                onPress={() => {
                    console.log("Clicked on image List Button")
                    navigation.navigate('Image')
                }}
                style={styles.m_t_10} title="go to images list">
            </Button>

            {/* TouchableOpacity will give the touch feel for the element */}
            {/* <TouchableOpacity
                onPress={() => {
                    console.log("Pressed on touchable opacity")
                    navigation.navigate('List')
                }}>
                <Text style={styles.m_t_30}> Click to go to List </Text>
            </TouchableOpacity> */}
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    m_t_30: {
        marginVertical: 30
    }
});

export default WelcomeScreen;
