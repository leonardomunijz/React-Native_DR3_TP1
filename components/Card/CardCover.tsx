// src/components/Card/CardCover.tsx

import React from 'react';
import { Card as PaperCard } from 'react-native-paper';
import { Image, StyleSheet, ImageStyle } from 'react-native';

interface CardCoverProps {
  source: { uri: string };
  style?: ImageStyle;
}

const CardCover: React.FC<CardCoverProps> = ({ source, style }) => {
  return (
    <PaperCard.Cover source={source} style={[styles.cover, style]} />
  );
};

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 150,
  },
});

export default CardCover;
