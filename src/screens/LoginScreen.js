import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Button, Text } from 'react-native';

import externalStyles from '../css/common-styles';

export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            showPostData: false
        };

        this.onUpdateusername = this.onUpdateUsername.bind(this);
        this.onUpdatePassword = this.onUpdatePassword.bind(this);
    }

    onUpdateUsername(updatedUsername) {
        this.setState({
            username: updatedUsername
        })
    }

    onUpdatePassword(updatedPassword) {
        this.setState({
            password: updatedPassword
        })
    }

    Login() {
        this.setState({
            showPostData: true
        })
    }

    render() {
        // let { showDetails } = this.state
        return (
            <View>
                <Text> Login Screen </Text>

                <View style={externalStyles.m_t_10}>
                    <TextInput style={externalStyles.input_box_m_all_10}
                        placeholder="Username" autoCapitalize="none"
                        autoCompleteType="off" onChangeText={(username) => { this.onUpdateUsername(username) }}>
                    </TextInput>
                </View>

                <View style={externalStyles.m_t_10}>
                    <TextInput style={externalStyles.input_box_m_all_10}
                        placeholder="Password" autoCapitalize="none"
                        autoCompleteType="off" onChangeText={(password) => { this.onUpdatePassword(password) }}>
                    </TextInput>
                </View>

                <Button title="Login"
                    onPress={() => { this.Login() }}></Button>
                {
                    this.state.showPostData
                        ?
                        <View>
                            <Text> Username : {this.state.username}</Text>
                            <Text> Password : {this.state.password}</Text>

                            <Text style={externalStyles.m_t_10}> {JSON.stringify(this.state)}</Text>
                        </View>
                        : null
                }

            </View>
        )
    }
}