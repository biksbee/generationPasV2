import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable, SafeAreaView, Image} from 'react-native'

import {PAN} from './poleAddNote'
import {LD} from "./listData";

export const AN = (props) => {
    const [shouldShow, setShouldShow] = useState(false)
    const [value, setValue] = useState('')

    const title1 = 'add element'
    const title2 = 'hide element'

    const fadeInElement = () => {
        setShouldShow(!shouldShow)
    }
    const takeValue = (name) => {
        setValue(lastNote => [...lastNote, {
            id: Date.now().toString(),
            name: name,
        }])

    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable style={styles.btn} onPress={fadeInElement}>
                    <Text style={styles.text}>
                        {
                            shouldShow ? title2 : title1
                        }
                    </Text>
                </Pressable>
                {
                    shouldShow ? (<PAN style={styles.pole} onSubmit={takeValue} />) : null
                }
            </View>
            {/*<View>*/}
            {/*    {*/}
            {/*        value.map(value => <LD list={value.name} key={value.id}/>)*/}
            {/*    }*/}
            {/*</View>*/}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: '#3eff00',
        marginBottom: 15,
    },
    text: {
        color: '#3eff00',
        fontWeight: 'bold',

    },
    pole: {

    }
});
