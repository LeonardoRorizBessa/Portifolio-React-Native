import React from 'react'
import { 
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native'
import { colors } from '@/styles/colors'
import { HeaderApps } from '@/components/HeaderApps/HeaderApps'
import { CookingCard } from '@/components/CookingCard/CookingCard'
import BurguerImage from '@/assets/cookingImgs/burguer.jpg'
import PastaPestoImage from '@/assets/cookingImgs/pasta-pesto.jpg'
import RisottoImage from '@/assets/cookingImgs/risoto.jpg'
import ParmigianaImage from '@/assets/cookingImgs/parmegiana.jpg'
import PaellaImage from '@/assets/cookingImgs/paella.jpg'
import LasagnaImage from '@/assets/cookingImgs/lasanha.jpg'

const recipes = [
  { 
    id: '1', 
    title: 'Burguer',
    image: BurguerImage,
  },
  { 
    id: '2', 
    title: 'Pasta ao Pesto',
    image: PastaPestoImage,
  },
  { 
    id: '3', 
    title: 'Risotto',
    image: RisottoImage,
  },
  { 
    id: '4', 
    title: 'Lasagna',
    image: LasagnaImage,
  },
  { 
    id: '5', 
    title: 'Paella',
    image: PaellaImage,
  },
  { 
    id: '6', 
    title: 'Parmigiana',
    image: ParmigianaImage,
  },
]

const { width, height } = Dimensions.get('window')

export default function Cooking() {
  return (
    <View style={styles.container}>
      <HeaderApps 
        title={'Cooking App'}
        icon={true}
        description='Cooking'
      />
      <View style={styles.boxApp}>
        <FlatList 
          data={recipes}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CookingCard
              title={item.title}
              image={item.image} 
            />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    width: width,
    height: height,
    padding: 16,
    gap: 16,
    backgroundColor: colors.black,
  },
  // Box App
  boxApp: {
    flex: 1,
  },
})