import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TouchableWithoutFeedback,TouchableNativeFeedback, TouchableHighlight} from 'react-native' 

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>props.onDelete(props.id)}>
        <View style={styles.listItems}>
            <Text>
                {props.title}
            </Text>
        </View>
        </TouchableOpacity>
    )
}



const styles  = StyleSheet.create({
    listItems:{
        padding:10,
        marginVertical:10,
        backgroundColor:'lightblue',
        borderColor:'black',
        borderRadius:50,
        borderWidth:1
    }
})



export default GoalItem;


