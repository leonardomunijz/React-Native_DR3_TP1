import React from 'react';
import { Image, ImageProps, StyleSheet } from 'react-native';

interface Props extends ImageProps {
  source: any;
  style?: object;
}

const ImageComponent: React.FC<Props> = ({ source, style, ...props }) => {
  return (
    <Image
      source={source}
      style={[styles.image, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default ImageComponent;
