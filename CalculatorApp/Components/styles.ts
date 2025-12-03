import {View, Pressable, Text, StyleSheet, Dimensions} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const buttonSize = screenWidth / 4 - 10; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFB6C1',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    displayContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        elevation: 3,
    },
    inputText: {
        fontSize: 40,
        color: '#DC143C',
        textAlign: 'right',
        marginBottom: 10,
    },
    resultText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#770737',
        textAlign: 'right',
    },
    button: {
        backgroundColor: '#DC143C',
        margin: 5,
        borderRadius: buttonSize / 2,
        width: buttonSize,
        height: buttonSize,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',    
        flexWrap: 'wrap',        
        justifyContent: 'center', 
        alignItems: 'center',     
        marginTop: 20,           
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});

export default styles;