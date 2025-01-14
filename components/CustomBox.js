import React from "react";
import { StyleSheet,Text, View } from "react-native";

const CustomText = (props) => 
{
    const { text1 } = props
    return (
        <View style ={styles.container1}>
          <View style={styles.container2}>
            <Text style={styles.txt}>{text1}</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1:
    {
        //flex:1,

        display:'flex',
        backgroundColor: 'rgb(61, 61, 61)',
        //alignItems: 'flex-start',
        //justifyContent: 'flex-start',
        margin:10,
        padding:10,
        borderRadius:10,
        borderWidth:2,
        borderColor: 'rgb(110, 110, 110)'
    },
    container2:
    {
        width:'100%',
        backgroundColor: 'rgb(61, 61, 61)',
        alignItems: 'stretch',
        justifyContent: 'center',

    },
    txt:
    {
        fontSize: 20,
        color: 'rgb(255, 255, 255)',
    },
})

export default CustomText;