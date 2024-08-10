import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  onPress?: () => void;
}

const CardComponent: React.FC<CardProps> = ({ title, content, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardComponent;
