// import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, StyleSheet, Text, FastList, Dimensions} from 'react-native';


import {MH} from './src/header/MainHeader'
import {GPL} from './src/component/GenerationPasswordLabel'
import {AN} from './src/component/addNote'



const App = () => {
    const [pas, setPas] = useState([]);
    const [oldData, setOldData] = useState([]);
    const addPas = (pas) => {
        setPas(pas)
    }




    return (
        <View style={styles.allApp}>
            <View style={styles.header}>
                <MH />
            </View>
            <View style={styles.pageContainer}>
                <GPL onSubmit={addPas} />
                <AN list={pas} data={oldData}/>

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
    header: {
        justifyContent: "flex-end",
        height: 70,
    },
    pageContainer: {
        paddingTop: 10,
        // borderColor: '#ff0000',
        borderTopWidth: 1,
        borderStyle: "solid",

    },
});

export default App;
