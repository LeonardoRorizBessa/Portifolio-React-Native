import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Ecommerce() {
  return (
    <View style={[styles.container, { backgroundColor: '#2ecc71' }]}>
      <Text style={styles.title}>E-commerce</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
