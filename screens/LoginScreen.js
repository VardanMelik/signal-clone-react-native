import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView 
            behavior='padding'
            /*enabled*/
            style={styles.container}
            >
            <StatusBar style="light" />
            <Image 
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg"
                }} 
                style={{ width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Email"
                    type="email"
                    autoFocus
                    value={email}
                    onChangeText={
                        text => setEmail(text)
                    }
                />
                <Input 
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={
                        text => setPassword(text)
                    }
                />
            </View>
            <Button 
                title="Login"
                onPress={signIn}
                containerStyle={styles.button}
            />
            <Button 
                title="Register"
                type="outline"
                containerStyle={styles.button}
                onPress={
                    () => navigation.navigate('Register')
                }
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
