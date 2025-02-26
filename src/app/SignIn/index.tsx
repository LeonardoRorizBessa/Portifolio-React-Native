import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('window');

export default function SignIn(){
  return (
    // <View>
    //   <View style={styles.viewLogo}>
    //     <MaterialCommunityIcons 
    //       name='react' 
    //       size={100} 
    //       color="blue"
    //     />
    //     <Text style={styles.titleLogo}>Welcome back</Text>
    //   </View>
    //   <Button 
    //     title='entrar'
    //     isLoading={isLoading}
    //     style={{ marginVertical: 20 }}
    //     onPress={() => handleNavigate('/SignIn')}
    //   />
    //   <Button 
    //     title='cadastrar'
    //     isLoading={isLoading}
    //     style={{ marginBottom: 20 }}
    //     onPress={() => handleNavigate('/SignUp')}
    //   />
    //   <Button 
    //     title='Home'
    //     isLoading={isLoading}
    //     style={{ marginBottom: 20 }}
    //     onPress={() => handleNavigate('/(tabs)/Home')}
    //     variant='outline'
    //   />
    //   <Input 
    //     label='Email' 
    //     placeHolder='email@gmail.com' 
    //     iconName='email'
    //   />
    //   <Input 
    //     label='Password' 
    //     placeHolder='********' 
    //     iconName='eye-off'
    //   />
    // </View>
    <></>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#129844',
    paddingVertical: 32,
  },
  boxLogo: {
    backgroundColor: '#fff000',
    height: height * 0.35,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxButtons: {
    backgroundColor: '#f17d89',
    height: height * 0.5,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxSocial: {
    backgroundColor: '#ff66ff',
    height: height * 0.15,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
})