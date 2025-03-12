import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors } from '@/styles/colors'
import { HeaderApps } from '@/components/HeaderApps/HeaderApps';

const { width, height } = Dimensions.get('window')

export default function ToDoList() {
  return (
    <View style={styles.container}>
      <HeaderApps 
        title={'To-Do List App'}
        icon={true}
        description='ToDoList'
      />
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
});
