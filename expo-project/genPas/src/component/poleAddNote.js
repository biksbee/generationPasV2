import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native'


export const PAN = ({onSubmit}) => {
    const title = 'create'
    const [name, setName] = useState([
        {id: 1, name: 'Eugene'}
    ])
    const [pas, setPas] = useState('')

    const pressHandler = () => {
        onSubmit(name)
        setName('')
        setPas('')
    }

    return (
        <View style={styles.p}>
            <View style={styles.newNote}>
                <Pressable style={styles.note_btn} onPress={pressHandler}>
                    <Text style={styles.note_btn_text}>
                        {title}
                    </Text>
                </Pressable>
                <View>
                    <TextInput style={styles.inp}
                        placeholder={"название"}
                        onChangeText={name => setName(name)}
                        value={name}
                    />
                    <TextInput style={styles.inp}
                        placeholder={"пароль"}
                        onChangeText={pas => setPas(pas)}
                        value={pas}
                    />
                </View>
            </View>
        </View>
    )
}
//
const styles = StyleSheet.create({
    newNote: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "flex-start",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderColor: '#3eff00',
        paddingBottom: 20,
        marginBottom: 20
    },
    note_btn: {
        width: '20%',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3eff00',
    },
    note_btn_text: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        color: '#3eff00',
    },
    inp: {
        width: 250,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderRadius: 15,
        marginVertical: 2.5,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#3eff00'
    }
});