import { FlatList, StyleSheet } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../data/dummy-data';

export default Categories = ({ navigation }) => {

  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('mealsOverview', { categoryId: item.id });
    }
    return <CategoryCard category={item} onPress={pressHandler}/>;
  }

  return (
    <>
    <FlatList 
      data={CATEGORIES} 
      keyExtractor={(item) => item.id} 
      renderItem={renderCategoryItem}
      numColumns={2}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  category: {},
});