import { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import MealsList from '../components/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export default MealsOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const catName = CATEGORIES.find(cat => cat.id === catId)?.title;

  useLayoutEffect(() => {
    navigation.setOptions({ title: catName || 'Meals' })
  }, [catId, catName]);

  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) > -1)
  return (
    <MealsList meals={meals}/>
  );
}

const styles = StyleSheet.create({})