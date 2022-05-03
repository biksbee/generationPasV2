import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, Pressable, Clipboard} from 'react-native'

export const GPL = ({onSubmit}) => {
    const title = 'gen';
    const [value, setValue] = useState('')

    const pressHandler = () => {
        onSubmit(value)
        //в дальнейшем сюда будет засыпаться измененный пароль
    }


    return (
        <View style={styles.label}>
            <Pressable style={styles.btn} onPress={pressHandler}>
                <Text style={styles.btn_text} >
                    {title}
                </Text>
            </Pressable>
            <TextInput style={styles.inp}
                onChangeText={text => setValue(text)} //onChangeText={setValue}
                value={value}
                placeholder={"Введите пароль "}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderStyle: "solid",
        borderColor: '#3eff00',

    },
    btn: {
        width: '20%',
        alignItems: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3eff00',
    },
    btn_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        color: '#3eff00',
    },
    inp: {
        paddingHorizontal: 10,
        marginHorizontal: 15,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderColor: '#3eff00'
    },
})