import React from 'react'
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Text 
} from 'react-native'
import { colors } from '../../styles/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  label?: string;
  placeHolder?: string;
  password?: boolean,
  value: string;
  onChangeText: (text: string) => void;
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
}

export function Input({ 
  label, 
  placeHolder,
  password = false,
  value,
  onChangeText,
  iconName,
}: Props){
  return (
    <View style={styles.container}>
      {label && <Text style={styles.labelInput}>{label}</Text>}
      <View style={styles.viewInput}>
        <TextInput 
          style={styles.input} 
          placeholder={placeHolder}
          secureTextEntry={password}
          value={value}
          onChangeText={onChangeText}
        />
        {iconName && (
          <MaterialCommunityIcons 
            name={iconName} 
            size={20} 
            color={colors.darkGray} 
            style={styles.icon} 
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    padding: 4,
  },
  labelInput: {
    fontSize: 14,
    color: colors.orange,
  },
  viewInput: {
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    fontSize: 14,
    borderColor: colors.darkGray,
    color: colors.darkGray,
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
})