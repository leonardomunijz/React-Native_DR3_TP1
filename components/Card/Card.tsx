// src/components/Card/Card.tsx

import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Card as PaperCard } from 'react-native-paper';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <PaperCard style={[styles.card, style]}>
      {children}
    </PaperCard>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#fff',
    margin: 10,
  },
});

export default Card;
