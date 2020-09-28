import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import externalStyles from '../css/common-styles';

// var externalStyles = require('../css/common-styles');

const WelcomeScreen = ({ navigation }) => {
    // console.log("from welcome screen ==>", props);
    // props is parent object
    // navigation is one of the property in the props, 
    // and if we give inside { } bracket it is considered as destruction method
    return (
        <View>
            <Text style={styles.text}> Welcome to Image Library App </Text>
            <View style={externalStyles.m_t_10}>
                <Button title="go to home"
                    onPress={() => {
                        // props.navigation.navigate('Home')
                        navigation.navigate('Home')
                    }}
                >
                </Button>
            </View>

            <View style={externalStyles.m_t_10}>
                <Button title="go to name list"
                    onPress={() => {
                        navigation.navigate('List')
                    }}
                >
                </Button>
            </View>

            <View style={externalStyles.m_t_10}>
                <Button title="go to images list"
                    onPress={() => {
                        navigation.navigate('Image')
                    }}
                >
                </Button>
            </View>

            <View style={externalStyles.m_t_10}>
                <Button title="go to counter"
                    onPress={() => {
                        navigation.navigate('Counter')
                    }}
                >
                </Button>
            </View>

            <View style={externalStyles.m_t_10}>
                <Button title="go to color"
                    onPress={() => {
                        navigation.navigate('Colors')
                    }}
                >
                </Button>
            </View>

            <View style={externalStyles.m_t_10}>
                <Button title="go to color adjuster"
                    onPress={() => {
                        navigation.navigate('ColorAdjusterWithReducer')
                    }}
                >
                </Button>
            </View>

            <View style={externalStyles.m_t_10}>
                <Button title="go to text"
                    onPress={() => {
                        navigation.navigate('Text')
                    }}
                >
                </Button>
            </View>

            <View style={externalStyles.m_t_10}>
                <Button title="go to Login"
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                </Button>
            </View>

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
