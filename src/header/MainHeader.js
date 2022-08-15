import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import {Icon} from "@rneui/themed";

import {Logo} from './Logo'

export const MH = () => {

    const openMenu = () => {

    }

    return (
        <View style={styles.header}>
            <Pressable onPress={openMenu}>
                <Icon name='navicon'
                      type='evilicon'
                      color='#3eff00'
                      size={35}
                      onPress
                      style={styles.menu}
                />
            </Pressable>
            <View>
                <Logo style={styles.logo}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",

    },
    menu: {
        width: 45
    },
    logo: {
        color: '#3eff00'
    }


});
