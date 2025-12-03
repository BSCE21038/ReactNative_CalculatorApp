import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet, Dimensions} from 'react-native';
import {evaluate} from 'mathjs';
import Button from './Components/button';
import Display from './Components/display';
import styles from './Components/styles';


function CalculatorApp() {
  const [input, setInput] = useState(''); //store user input
  const [result, setResult] = useState(''); //store computational result

  //***************function to handle button presses*********************
  const handlePress = value => {
    if (value === 'C') {
      //clear both input and result
      setInput('');
      setResult('');
    } else if (value === 'X') {
      //remove last input
      setInput(previous => previous.slice(0, -1));
    } else if (value === '%') {
      //add % to input
      const lastNumberMatch = input.match(/(-?\d+(\.\d+)?)$/);
      if (lastNumberMatch) {
        setInput(previous => previous + '%');
      }
    } else if (value === '=') {
      //calculate the input
      try {
        setResult(evaluate(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === '.') {
      //add decimal point
      const lastPart = input.split(/[\+\-\*\/\(\)%]+/).pop();
      if (lastPart && !lastPart.includes('.')) {
        setInput(previous => previous + value);
      } else if (!lastPart) {
        setInput(previous => previous + '0.');
      }
    } else if (value === '+/-') {
      if (!input) {
        //case of no input
        setInput('-');
      } else {
        //check last input
        const lastNumMatch = input.match(/(-?\d+(\.\d+)?)$/);
        if (lastNumMatch) {
          const lastNumber = lastNumMatch[0];
          const updatedNumber = lastNumber.startsWith('-') // in case of -ve remove -
            ? lastNumber.slice(1)
            : `(-${lastNumber})`; //wrap to ()
          setInput(previous => previous.replace(/(-?\d+(\.\d+)?)$/, updatedNumber));
        } else {
          setInput(previous => previous + '(-');
        }
      }
    } else {
      setInput(previous => previous + value);
    }
  };

  //***************button To render*********************
  const buttons = [
    'C', 'X', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '+/-', '0', '.', '=',
  ];

  return (
    <View style={styles.container}>
      <Display input={input} result={result} />
      <View
        style={styles.buttonContainer}>
        {buttons.map(button => (
          <Button key={button} label={button} onPress={handlePress} />
        ))}
      </View>
    </View>
  );
}

export default CalculatorApp;