import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, Pressable, Clipboard, Dimensions} from 'react-native'
import {Icon} from "@rneui/themed";

const window = Dimensions.get("window");

export const GPL = ({onSubmit}) => {
    const placeholder = "Введите пароль"
    const gen = 'gen'
    const copy = 'copy'

    const [value, setValue] = useState('')
    const [shouldShow, setShouldShow] = useState(false)

    const changePas = () => {
        let arr = Array.from(value);
        let a = arr.concat(Array.from(value))
        a = a.toString()
        setValue(a)

        onSubmit(a)
    }

    const pressHandler = () => {
        if(value === '') {
            setValue('')
        } else {
            setShouldShow(true)
            changePas()
            //в дальнейшем сюда будет засыпаться измененный пароль
        }

    }

    const close = () => {
        setShouldShow(false)
        setValue('')
        onSubmit('')
    }

    const copyPas = () => {
        setShouldShow(false)
        const copy = Clipboard.setString(value);
        setValue('')
        close()
    }

    return (
        <View style={styles.label}>
            { !shouldShow ?
                <Pressable style={styles.btn} onPress={pressHandler}>
                    <Text style={styles.btn_text}>
                        {gen}
                    </Text>
                </Pressable> :
                <Pressable style={styles.btn} onPress={copyPas}>
                    <Text style={styles.btn_text}>
                        {copy}
                    </Text>
                </Pressable>
            }
            <TextInput style={styles.inp}
                onChangeText={value => setValue(value)} //onChangeText={setValue}
                value={value}
                placeholder={placeholder}
            />
            <Pressable style={styles.icon} onPress={close}>
                <Icon
                    name='close'
                    type='evilicon'
                    color='#3eff00'
                    size={27}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: "center",
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderStyle: "solid",
        borderColor: '#3eff00',

    },
    buttons: {
        width: '20%',
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
        width: window.width-150, //?
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderColor: '#3eff00'
    },
    icon: {
        justifyContent: "center"
    }
})