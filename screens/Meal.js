import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';

export default Meal = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find(meal => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title });
  }, [mealId, meal]);

  return (
    <View style={styles.container}>
      <Image source={{uri: meal.imageUrl}} style={styles.mealImage} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails 
        duration={meal.duration} 
        affordability={meal.affordability} 
        complexity={meal.complexity} 
      />
      <Text style={styles.subtitle}>Ingredients</Text>
      {meal.ingredients.map((ingredient, index) => <Text key={index}>{ingredient}</Text>)}

      <Text style={styles.subtitle}>Preparation</Text>
      {meal.steps.map((step, index) => <Text key={index}>{step}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  mealImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
});