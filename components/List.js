import { StyleSheet, View, Text } from 'react-native';

export default List  = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <View style={styles.listItem}>
          <Text style={styles.listItemText} key={index}>{item}</Text>
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
    backgroundColor: '#90A4AE',
    marginVertical: 4,
    width: '80%'
  },
  listItemText: {

  },
});