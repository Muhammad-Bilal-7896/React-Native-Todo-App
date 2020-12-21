import React, { useState } from 'react';

import { Button, View, TextInput, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');


    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }


    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <Button 
                    onPress={props.onCancel} 
                    title="CANCEL" 
                    color="red" />
                    <Button 
                    style={{ marginTop: '10%' }} 
                    title="ADD It"
                    onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center',

    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginRight: 20,
        marginBottom: 20
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
    }
})

export default GoalInput;