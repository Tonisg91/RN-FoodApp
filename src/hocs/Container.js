import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import { Header } from '../components'

const Container = ({ children, toggleNav }) => {
    return (
        <View style={styles.container}>
            <Header cb={toggleNav}/>
            {children}
            <StatusBar style="auto" backgroundColor="white"/>
        </View>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
