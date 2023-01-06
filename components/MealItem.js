import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Pressable, Image, Platform } from 'react-native';
import MealDetails from './MealDetails';

export default MealItem = ({meal}) => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('meal', { mealId: meal.id });
  }

  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <Pressable onPress={handlePress} style={({pressed}) => pressed && styles.pressed}>
          <View style={styles.header}>
            <Image source={{uri: meal.imageUrl}} style={styles.mealImage} />
            <Text style={styles.mealTitle}>{meal.title}</Text>
          </View>
          <MealDetails 
            duration={meal.duration} 
            affordability={meal.affordability} 
            complexity={meal.complexity} 
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android'? 'hidden' : 'visible',
    backgroundColor: '#fff',

    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.8,
  },
  header: {
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  mealImage: {
    width: '100%',
    height: 200,
  },
  mealTitle: {
    fontWeight: 'bold',
    marginHorizontal: 24,
    marginVertical: 16,
    fontSize: 18,
  }
});