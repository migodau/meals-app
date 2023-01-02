import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Categories from './screens/Categories';
import Meal from './screens/Meal';
import MealsOverview from './screens/MealsOverview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#37474F' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#ECEFF1' }
        }}>
          <Stack.Screen 
            name="categories"
            component={Categories} 
            options={{ title: 'All Categories' }}
          />
          <Stack.Screen 
            name="mealsOverview" 
            component={MealsOverview} 
            // options={({route}) => {
            //   const id = route.params.categoryId;
            //   return { title: id };
            // }}
          />
          <Stack.Screen 
            name="meal"
            component={Meal}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
