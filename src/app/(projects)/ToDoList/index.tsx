import React from 'react';
import { 
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors } from '@/styles/global'
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
    paddingTop: 16,
    paddingHorizontal: 16,
    gap: 16,
    backgroundColor: colors.black,
  },
});
