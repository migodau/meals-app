import { StyleSheet, View, Text } from 'react-native';

export default MealDetails = ({ duration, affordability, complexity }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detail}>{duration}m</Text>
      <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
      <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginHorizontal: 24,
    marginBottom: 16,
    
  },
  detail: {
    marginHorizontal: 4,
  },
})