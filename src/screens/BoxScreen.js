import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import externalStyles from '../css/common-styles';

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
                // height: 200, // once height is set for the view , then we can able to see the difference in flex properties
                // alignItems: 'stretch' // It is the default value set for an view property
                // alignItems: 'flex-start'
                // alignItems: 'center'
                // alignItems: 'flex-end',

                // flexDirection: 'column' // it is will consider entire page as one column (Default Property)
                // flexDirection: 'row'

                // justifyContent: 'flex-start', // It is the default value set for an view property
                // justifyContent: 'center',                
                // justifyContent: "space-between"
                // justifyContent: "space-around"
                // justifyContent: "space-evenly"
            }
        });

        // In parent flex properties like (alignItems, justifyContent, flexDirection)
        // In Child flex properties like (flex, alignSelf)

        return (
            // if you want to apply multiple styles / class for single element use [] (array)
            <View style={[styles.p_lr_10, externalStyles.m_t_20]}>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}> Box Screen </Text>


                    <View style={styles.flexViewStyle}>
                        <Text style={styles.textStyl}> Text 1 </Text>
                        <Text style={styles.textStyl}> Text 1331 </Text>
                        <Text style={styles.textStyl}> Text 14r </Text>
                    </View>
                </View>
            </View>
        )
    }


}