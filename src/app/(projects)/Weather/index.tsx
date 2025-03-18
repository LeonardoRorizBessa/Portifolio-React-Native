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

export default function Weather() {
  return (
    <View style={styles.container}>
      <HeaderApps 
        title={'Weather App'}
        icon={true}
        description='Weather'
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
