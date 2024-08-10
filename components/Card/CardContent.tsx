// src/components/Card/CardContent.tsx

import React from 'react';
import { Card as PaperCard } from 'react-native-paper';
import { View, ViewStyle } from 'react-native';

interface CardContentProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const CardContent: React.FC<CardContentProps> = ({ children, style }) => {
  return (
    <PaperCard.Content style={style}>
      {children}
    </PaperCard.Content>
  );
};

export default CardContent;
