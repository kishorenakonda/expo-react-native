import React, { useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const counterReducerFunction = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { ...state, count: state.count + action.payload };
        case 'decrease':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}

const CounterScreenWithReducer = () => {
    const [state, counterMethod] = useReducer(counterReducerFunction, { count: 0 });
    return (
        <View>
            <Text> Inside Counter Screen with Reducer </Text>

            <Button title="Increase count from redcuer"
                onPress={() => {
                    counterMethod({ type: 'increase', payload: 1 });
                }}>
            </Button>

            <Button title="decrease count from redcuer"
                onPress={() => {
                    counterMethod({ type: 'decrease', payload: 1 });
                }}>
            </Button>

            <Text> Count : {state.count}</Text>
        </View>
    )
}

export default CounterScreenWithReducer;