import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions,
} from 'react-native'
import { Button } from '@/components/Button/Button'
import { colors } from '@/styles/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

export default function Index() {

  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <MaterialCommunityIcons 
          name="react" 
          size={120} 
          color={colors.menta} 
        />
        <Text style={styles.textWelcome}>Welcome Back</Text>
      </View>

      <View style={styles.boxButtons}>
        <Button 
          title="Sign In"
          variant="outlinePrimary" 
          route='/SignIn'
        />
        <Button 
          title="Sign Up"
          variant="secundary" 
          route='/SignUp'
        />
      </View>

      <View style={styles.boxSocial}>
        <Text style={styles.textSocial}>Visit my Social Media</Text>
        <View style={styles.boxMedias}>
          <MaterialCommunityIcons 
            name="instagram" 
            size={30} 
            color={colors.menta} 
          />
          <MaterialCommunityIcons 
            name="linkedin" 
            size={30} 
            color={colors.menta} 
          />
          <MaterialCommunityIcons 
            name="github" 
            size={30} 
            color={colors.menta} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.grayDark,
  },
  //Box Logo
  boxLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: width * 0.25,
    width: width * 0.9,
    gap: 20,
  },
  textWelcome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  // Box Buttons
  boxButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    gap: 20,
  },
  // Box Social Media
  boxSocial: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    paddingBottom: width * 0.05,
    gap: 10,
  },
  textSocial: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  boxMedias: {
    flexDirection: 'row',
    gap: 15,
  },
});
