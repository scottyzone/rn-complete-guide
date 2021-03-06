import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={ styles.inputContainer }>
            <TextInput 
                placeholder="Course Goal" 
                style={ styles.input }
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
      );
};


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    input: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        paddingVertical: 5, 
        paddingLeft: 10, 
        paddingRight: 10,
        width: '80%'
    },
});

export default GoalInput;