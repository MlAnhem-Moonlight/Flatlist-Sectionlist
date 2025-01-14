import React from "react";
import { StyleSheet,Text, View, Image } from "react-native";

const BoxText = (props) => 
{
    const { text1,text2,text3,text4 } = props
    return (
        <View style ={styles.container1}>
            <View style ={styles.container2}>
                <Text style ={styles.txt}>{text1}</Text>
                <Text style ={styles.txt}>
                    {text2}
                </Text>
                <Text style ={styles.txt}>
                    {text3}  {text4}
                </Text>
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
    container3:
    {
        width: '10%',
        
        backgroundColor: 'rgb(0, 255, 42)',
        alignItems: 'stretch',
        justifyContent: 'center',

    },
    txt:
    {
        fontSize: 20,
        color: 'rgb(255, 255, 255)',
    },
    image:
    {
        flex:1,
    }
})

export default BoxText;