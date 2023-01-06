import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

export default Favorites = () => {

  const favContext = useContext(FavoritesContext);
  const favIds = favContext.ids;
  const meals = MEALS.filter(meal => favIds.includes(meal.id));

  if (!meals.length) {
    return <View style={styles.container}><Text>No favorite meals yet</Text></View>
  }
  
  return (
    <MealsList meals={meals} />
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});