import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  columns: number;
  style?: ViewStyle;
}

const GridComponent: React.FC<Props> = ({ children, columns, style }) => {
  const items = React.Children.toArray(children);
  const rows = Array.from({ length: Math.ceil(items.length / columns) }, (_, index) =>
    items.slice(index * columns, index * columns + columns)
  );

  return (
    <View style={[styles.container, style]}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GridComponent;
