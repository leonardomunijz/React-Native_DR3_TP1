// src/components/Card/CardTitle.tsx

import React from 'react';
import { Card as PaperCard } from 'react-native-paper';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface CardTitleProps {
  title: string;
  subtitle?: string;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
}

const CardTitle: React.FC<CardTitleProps> = ({ title, subtitle, titleStyle, subtitleStyle }) => {
  return (
    <PaperCard.Title
      title={title}
      subtitle={subtitle}
      titleStyle={[styles.title, titleStyle]}
      subtitleStyle={[styles.subtitle, subtitleStyle]}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
});

export default CardTitle;
