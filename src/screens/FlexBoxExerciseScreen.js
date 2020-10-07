import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import externalStyles from '../css/common-styles';
import flexBoxStyles from '../css/flexbox-styles';

export class FlexBoxExerciseScreen extends Component {
    render() {
        return (
            <View>
                <Text> Flex Box Exercise </Text>
                <View style={externalStyles.m_t_20}>
                    <View style={flexBoxStyles.parentStyle}>
                        <View style={flexBoxStyles.viewOneStyle}></View>
                        <View style={flexBoxStyles.viewTwoStyle}></View>
                        <View style={flexBoxStyles.viewThreeStyle}></View>
                    </View>
                </View>
            </View>
        )
    }
}