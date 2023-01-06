import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Categories from './screens/Categories';
import Favorites from './screens/Favorites';
import Meal from './screens/Meal';
import MealsOverview from './screens/MealsOverview';
import Ionicons from '@expo/vector-icons/Ionicons';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#C2185B' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#ECEFF1' },
      drawerActiveTintColor: '#C2185B',
      drawerActiveBackgroundColor: '#F8BBD0'
    }}>
      <Drawer.Screen 
        name="categories" 
        component={Categories} 
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => <Ionicons name="grid" size={size} color={color} />
        }}
      />
      <Drawer.Screen 
        name="favorites" 
        component={Favorites} 
        options={{
          title: 'Favorites',
          drawerIcon: ({color, size}) => <Ionicons name="md-star" size={size} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#C2185B' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#ECEFF1' }
          }}>
            <Stack.Screen 
              name="drawer"
              component={DrawerNavigator} 
              options={{ 
                headerShown: false, 
              }}
            />
            <Stack.Screen 
              name="mealsOverview" 
              component={MealsOverview}
            />
            <Stack.Screen 
              name="meal"
              component={Meal}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
