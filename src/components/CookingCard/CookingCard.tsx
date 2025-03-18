import React, { useState } from 'react'
import { 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native'
import { colors, fontSize, radius } from '@/styles/global';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

interface Props {
  title: string;
  image: any;
  description: string;
}

export function CookingCard({ 
  title,
  image,
  description,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false)
  
  const handlePress = () => {
    setModalVisible(true)
  }

  return (
    <>
      <TouchableOpacity 
        style={styles.card} 
        activeOpacity={0.8}
        onPress={handlePress}
      >
        <Image 
          source={image}
          style={styles.image}
        />
        <View style={styles.boxTitle}>
          <Text style={styles.itemsTitle}>{title}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType='fade'
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable 
          style={styles.modalContainer} 
          onPress={() => setModalVisible(false)}
        >
          <Pressable 
            style={styles.modalView} 
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.boxImage}>
              <Image 
                source={image}
                style={styles.modalImage}
              />
              <Pressable 
                style={styles.closeButton} 
                onPress={() => setModalVisible(false)}
              >
                <MaterialCommunityIcons 
                  name="close" 
                  size={24} 
                  color={colors.white} 
                />
              </Pressable>
              <View style={styles.modalBoxTitle}>
                <Text style={styles.modalItemsTitle}>{title}</Text>
              </View>
            </View>
            <View style={styles.boxDescription}>
              <Text style={styles.modalDescription}>{description}</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginVertical: 8,
    borderRadius: radius.small, 
    overflow: 'hidden',
    width: '100%',
    height: 160,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  boxTitle: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.black50,
    borderRadius: radius.xxs,
  },
  itemsTitle: {
    fontSize: fontSize.large,
    color: colors.white,
    fontWeight: 'bold',
  },
  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black50,
  },
  modalView: {
    width: width * 0.85,
    backgroundColor: colors.white,
    borderRadius: radius.medium,
    alignItems: 'center',
  },
  // Box Image
  boxImage: {
    width: '100%',
    position: 'relative',
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopRightRadius: radius.medium,
    borderTopLeftRadius: radius.medium,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.black50,
    borderRadius: radius.small,
    padding: 4,
  },
  modalBoxTitle: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.black50,
    borderRadius: radius.xxs,
  },
  modalItemsTitle: {
    fontSize: fontSize.large,
    color: colors.white,
    fontWeight: 'bold',
  },
  // Box Description
  boxDescription: {
    width: '100%',
    padding: 16,
  },
  modalDescription: {
    fontSize: fontSize.medium,
    textAlign: 'left',
  },
})