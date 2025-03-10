import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors } from '@/styles/colors'

const { width, height } = Dimensions.get('window')

export default function Ecommerce() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-commerce</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    width: width,
    height: height,
    padding: 16,
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
