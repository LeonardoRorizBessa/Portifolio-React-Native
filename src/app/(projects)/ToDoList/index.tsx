import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ToDoList() {
  return (
    <View style={[styles.container, { backgroundColor: '#3498db' }]}>
      <Text style={styles.title}>To-Do List</Text>
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
