import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';
import { StyleSheet, ViewStyle } from 'react-native';

interface Props extends ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle; // Adicione a propriedade style se necessário
}

const ButtonComponent: React.FC<Props> = ({ title, onPress, style, ...props }) => {
  return (
    <Button mode="contained" onPress={onPress} style={[styles.button, style]} {...props}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default ButtonComponent;
