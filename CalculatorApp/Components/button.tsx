import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet, Dimensions} from 'react-native';
import styles from './styles';

interface ButtonProps {
  label: string;
  onPress: (value: string) => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={() => onPress(label)}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default Button;