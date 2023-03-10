import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/List';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

export default Meal = ({ route, navigation }) => {
  const favContext = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const meal = MEALS.find(meal => meal.id === mealId);
  const isFav = !!favContext.ids.includes(mealId);

  const toggleFavoriteState = () => {
    if (isFav) {
      favContext.removeFavorite(mealId);
      return;
    }
    favContext.addFavorite(mealId);
    
  }

  useLayoutEffect(() => {
    navigation.setOptions({ 
      title: meal.title,
      headerRight: () => <IconButton icon={isFav ? 'star' : 'star-outline'} iconColor="white" onPress={toggleFavoriteState}/>
    });
  }, [navigation, meal, isFav]);

  return (
    <ScrollView style={{ flex: 1}}>
      <View style={styles.container}>
        <Image source={{uri: meal.imageUrl}} style={styles.mealImage} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetails 
          duration={meal.duration} 
          affordability={meal.affordability} 
          complexity={meal.complexity} 
        />
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>Ingredients</Text>
        </View>
        <List data={meal.ingredients} />
        
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>Preparation</Text>
        </View>
        <List data={meal.steps} />
      </View>
    </ScrollView>
      
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
    color:'#263238',
  },
  subtitle: {
    width: '90%',
    paddingBottom: 8,
    marginBottom: 16,
    marginTop: 18,
    borderBottomColor: '#CFD8DC',
    borderBottomWidth: 1,
  },
  subtitleText: {
    color:'#263238',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});