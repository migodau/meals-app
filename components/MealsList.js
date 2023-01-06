import { FlatList } from 'react-native';
import MealItem from '../components/MealItem';

const renderMealItem = ({ item }) => {
  return <MealItem meal={item} />
}

export default MealsList = ({ meals }) => {
  return (
    <FlatList data={meals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
  );
}