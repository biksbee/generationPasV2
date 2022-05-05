import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, StyleSheet, Text, FastList, Dimensions} from 'react-native';

import {GPL} from './src/component/GenerationPasswordLabel'
import {LD} from './src/component/listData'
import {AN} from './src/component/addNote'



const App = () => {
    const [pas, setPas] = useState([]);
    const addPas = (pas) => {
        setPas(pas)
    }

    return (
        <View style={styles.allApp}>
            <View style={styles.pageContainer}>
                <GPL onSubmit={addPas} />
                <AN list={pas} />

                {/*<View>*/}
                {/*    {*/}
                {/*        pas.map(pas => <LD list={pas} key={pas.id}/>)*/}
                {/*    }*/}
                {/*</View>*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    allApp: {
        backgroundColor: "#000",
        // height: Dimensions.get('screen').height,
        height: '100%'
    },
    pageContainer: {
        marginTop: 100,
        paddingTop: 10,
        // borderColor: '#ff0000',
        borderTopWidth: 1,
        borderStyle: "solid",

    },
});

export default App;
