import { StyleSheet, View, Text } from 'react-native';

export default List  = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.listItemText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#E3CCD4',
    marginVertical: 4,
    width: '80%'
  },
  listItemText: {

  },
});