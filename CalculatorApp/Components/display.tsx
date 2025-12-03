import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet, Dimensions} from 'react-native';
import styles from './styles';

interface DisplayProps {
  input: string;
  result: string;
}

const Display = ({ input, result }: DisplayProps) => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.inputText}>{input || '0'}</Text>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

export default Display;