import React, {useState} from 'react'
import {Text, View, StyleSheet, Pressable, TouchableOpacity, FlatList} from "react-native";
import { Icon } from '@rneui/themed';


export const AdditionallyProperty = ({onSubmit}) => {

    const close = () => {
        onSubmit(1)
    }
    const edit = () => {
        onSubmit(2)
    }
    const copy = () => {
        onSubmit(3)
    }
    const complete = () => {
        onSubmit(4)
    }


    return (
        <View style={styles.Container}>
            <Pressable style={styles.icon} onPress={edit}>
                <Icon
                    name='pencil'
                    type='evilicon'
                    color='#3eff00'
                />
            </Pressable>
            <Pressable style={styles.icon} onPress={copy}>
                <Icon
                    name='link'
                    type='evilicon'
                    color='#3eff00'
                />
            </Pressable>
            <Pressable style={styles.icon} onPress={close}>
                <Icon
                    name='close'
                    type='evilicon'
                    color='#3eff00'
                />
            </Pressable>
            <Pressable style={styles.icon} onPress={complete}>
                <Icon
                    name='check'
                    type='evilicon'
                    color='#3eff00'
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row"
    },
    icon: {
        marginHorizontal: 5,
    }


});