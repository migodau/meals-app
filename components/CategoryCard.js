import { StyleSheet, View, Text, Pressable } from 'react-native';

export default CategoryCard = ({category, onPress}) => {
  return (
    <View style={[styles.categoryCard, { backgroundColor: category.color }]}>
      <Pressable 
        style={({ pressed }) => [styles.categoryButton, pressed ? styles.pressed : null]} 
        onPress={onPress}
      >
        <View style={styles.content}>
          <Text style={styles.categoryText}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    flex: 1,
    height: 100,
    margin: 12,
    borderRadius: 5
  },
  categoryButton: {
    flex: 1,
  },
  pressed: {
    opacity: 0.8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});