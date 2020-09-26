import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, Button } from 'react-native';

var externalStyle = require('../css/common-styles');

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text> Enter User Name </Text>
            <TextInput
                style={externalStyle.input_box_m_all_10}
                autoCapitalize="none" autoCorrect={false}
                value={name}
                placeholder="Enter your Name"
                onChangeText={(newValue) => {
                    setName(newValue)
                }}>
            </TextInput>

            <TextInput
                style={externalStyle.input_box_m_all_10}
                autoCapitalize="none" autoCorrect={false}
                value={password}
                placeholder="Enter your password"
                onChangeText={(newpassword) => {
                    setPassword(newpassword)
                }}>
            </TextInput>

            <View style={externalStyle.m_t_10}>
                <Text> Entered User Name Is : </Text>
                <Text> {name}</Text>
            </View>

            <View style={externalStyle.m_t_10}>
                <Text> Entered Password Name Is : </Text>
                <Text> {password}</Text>
                {password.length < 5 ? <Text> Password Length should be greater than 5 Character </Text> : 'null'}
            </View>
        </View>
    )
}

export default TextScreen;