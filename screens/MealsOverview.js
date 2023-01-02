import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export default MealsOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const catName = CATEGORIES.find(cat => cat.id === catId)?.title;

  const renderMealItem = ({ item }) => {
    const handlePress = () => {
      navigation.navigate('meal', { mealId: item.id });
    }

    return <MealItem meal={item} onPress={handlePress} />
  }

  useLayoutEffect(() => {
    navigation.setOptions({ title: catName || 'Meals' })
  }, [catId, catName]);

  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) > -1)
  return (
    <FlatList data={meals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
  );
}

const styles = StyleSheet.create({})