import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Props extends TextInputProps {
  label: string;
}

const InputComponent: React.FC<Props> = ({ label, ...props }) => {
  return (
    <TextInput
      label={label}
      mode="outlined"
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
  },
});

export default InputComponent;
