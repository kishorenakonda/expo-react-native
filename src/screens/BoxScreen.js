import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BoxScreen extends Component {
    constructor() {
        super();
    }

    render() {
        const styles = StyleSheet.create({
            p_lr_10: {
                paddingHorizontal: 10
            },
            p_t_10: {
                paddingTop: 10
            },
            viewStyle: {
                borderWidth: 3,
                borderColor: '#000'
            },
            textStyle: {
                borderWidth: 1,
                borderColor: 'red',
                marginVertical: 20,  // Shorthand property for margin top and bottom
                marginHorizontal: 20 // Shorthand property for margin left and right
            },
            flexViewStyle: {
                alignItems: 'stretch' // It is the default value set for an view property
                // alignItems: 'flex-start'
                // alignItems: 'center'
                // alignItems: 'flex-end'
            }
        });

        return (
            // if you want to apply multiple styles / class for single element use [] (array)
            <View style={[styles.p_lr_10, styles.p_t_10]}>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}> Box Screen </Text>
                </View>

                <View style={styles.flexViewStyle}>
                    <Text style={styles.textStyle}> Text 1 </Text>
                    <Text style={styles.textStyle}> Text 1331 </Text>
                    <Text style={styles.textStyle}> Text 14r </Text>
                </View>
            </View>
        )
    }


}