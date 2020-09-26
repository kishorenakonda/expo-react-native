import { StyleSheet } from 'react-native'

// If you create stylesheet in external and try to access in any file it will not load the css
// export default StyleSheet.create({
//     text: {
//         fontSize: 20
//     },
//     m_t_10: {
//         marginTop: 10
//     },
//     m_t_20: {
//         marginTop: 20
//     }
// });

// Instead of creating it as stylesheet create it as module.exports to access it anywhere accross the project
module.exports = {
    "text": {
        fontSize: 20
    },
    "fs-20": {
        fontSize: 20
    },
    "m_t_10": {
        marginTop: 10
    },
    "m_t_20": {
        marginTop: 20
    },
    "text_center": {
        alignItems: 'center'
    },
    "input_box": {
        borderWidth: 1,
        borderColor: '#CCC',
        marginTop: 10
    },
    "input_box_m_all_10": {
        borderWidth: 1,
        borderColor: '#CCC',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    }
};