import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors } from '@/styles/colors'
import { BackButton } from '@/components/BackButton/BackButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

export default function Cooking() {
  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <BackButton />
        <Text style={styles.title}>Cooking App</Text>
        <MaterialCommunityIcons 
          name='chat-question'
          size={35}
          color={colors.orange}
        />
      </View>
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
  // Box Header
  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
