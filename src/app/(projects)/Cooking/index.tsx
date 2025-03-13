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

const cookingCards = [
  { 
    id: '1', 
    title: 'Burguer',
    image: BurguerImage,
    description: `Ingredientes:\n- 360 g de patinho moído\n- 1 colher de sopa de água\n- 1 colher de sopa de azeite\n- Sal e pimenta-do-reino moída a gosto.
    \nModo de preparo:\nMisture tudo, retire 180 g de carne, molde no formato de um hambúrguer, coloque na airfryer por 15 minutos a 200°C. Vire o hambúrguer na metade do tempo para cozinhar dos dois lados.`
  },
  { 
    id: '2', 
    title: 'Pasta ao Pesto',
    image: PastaPestoImage,
    description: `Ingredientes:\n- 125 g de massa (espaguete ou penne)\n- 1/2 xícara de folhas de manjericão fresco\n- 1 dente de alho\n- 25 g de queijo parmesão ralado\n- 25 g de castanha de caju ou nozes\n- 50 ml de azeite de oliva\n- Sal e pimenta a gosto.
    \nModo de preparo:\nCozinhe a massa conforme as instruções da embalagem. No liquidificador, bata o manjericão, alho, queijo, castanhas, azeite, sal e pimenta até formar um molho homogêneo. Misture o pesto à massa cozida e sirva com mais queijo parmesão por cima.`
  },
  { 
    id: '3', 
    title: 'Risotto',
    image: RisottoImage,
    description: `Ingredientes:\n- 1/2 xícara de arroz arbóreo\n- 1/4 de cebola picada\n- 1 colher de sopa de manteiga\n- 1/4 de xícara de vinho branco seco\n- 2 xícaras de caldo de legumes quente\n- 100 g de cogumelos fatiados\n- 25 g de queijo parmesão ralado\n- Sal e pimenta a gosto.
    \nModo de preparo:\nRefogue a cebola na manteiga, adicione o arroz e misture bem. Acrescente o vinho e mexa até evaporar. Adicione o caldo aos poucos, mexendo sempre. Após 15 minutos, adicione os cogumelos. Quando o arroz estiver cremoso e al dente, finalize com queijo parmesão e mais manteiga. Sirva quente.`
  },
  { 
    id: '4', 
    title: 'Lasagna',
    image: LasagnaImage,
    description: `Ingredientes:\n- 250 g de massa para lasanha\n- 250 g de carne moída\n- 1/4 de cebola picada\n- 1 dente de alho picado\n- 1/2 lata de molho de tomate\n- 100 g de queijo mussarela\n- 50 g de queijo parmesão\n- 1/2 xícara de molho branco\n- Sal, pimenta e orégano a gosto.
    \nModo de preparo:\nRefogue a cebola e o alho, adicione a carne moída e cozinhe até dourar. Acrescente o molho de tomate, sal e pimenta. Em um refratário, monte camadas de massa, carne, molho branco e queijos. Repita até acabar os ingredientes. Leve ao forno a 180°C por 30 minutos.`
  },
  { 
    id: '5', 
    title: 'Paella',
    image: PaellaImage,
    description: `Ingredientes:\n- 1 xícara de arroz para paella\n- 150 g de camarão\n- 100 g de lula fatiada\n- 100 g de mexilhões\n- 1/4 de cebola picada\n- 1 dente de alho picado\n- 1/2 tomate picado\n- 1/2 pimentão vermelho fatiado\n- Açafrão, sal e pimenta a gosto\n- 2 xícaras de caldo de peixe ou frango.
    \nModo de preparo:\nRefogue a cebola e o alho. Adicione o arroz, tomate e açafrão. Aos poucos, acrescente o caldo quente. Após 10 minutos, adicione os frutos do mar e o pimentão. Cozinhe por mais 10 minutos sem mexer. Deixe descansar por 5 minutos antes de servir.`
  },
  { 
    id: '6', 
    title: 'Parmigiana',
    image: ParmigianaImage,
    description: `Ingredientes:\n- 2 filés de frango\n- 1/2 xícara de farinha de trigo\n- 1/2 xícara de farinha de rosca\n- 1 ovo batido\n- 100 g de queijo mussarela\n- 1/2 xícara de molho de tomate\n- Óleo para fritar\n- Sal e pimenta a gosto.
    \nModo de preparo:\nTempere os filés de frango com sal e pimenta. Passe na farinha de trigo, depois no ovo e por último na farinha de rosca. Frite até dourar. Disponha os filés em um refratário, cubra com molho de tomate e queijo mussarela. Leve ao forno a 200°C até o queijo derreter. Sirva com arroz ou batatas.`
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
          data={cookingCards}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CookingCard
              title={item.title}
              image={item.image}
              description={item.description}
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