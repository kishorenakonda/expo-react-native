import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between' // to leave space b/w the child element since we have used flexDirection property
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
        // marginTop: 70  // If we give the margin property it will not fit into the parent view style
        alignSelf: 'flex-end' // align self will always fit inside the parent style property
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
    }
});