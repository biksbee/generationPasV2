import React, {useState} from 'react'
import {Text, View, StyleSheet, Pressable, TouchableOpacity, FlatList} from "react-native";
import { Icon } from '@rneui/themed';

//tempus sans


export const MyIcon = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>
                young genius
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {

    },
    Text: {
        color: '#3eff00',
        fontSize: 24,
    }

})