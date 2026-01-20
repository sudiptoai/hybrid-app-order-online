import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantListScreen from './src/screens/RestaurantListScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import CartScreen from './src/screens/CartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, restaurant) => {
    setCart(prevCart => [...prevCart, { ...item, restaurant }]);
  };

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RestaurantList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF6B6B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="RestaurantList" 
          component={RestaurantListScreen}
          options={{ title: 'Restaurants' }}
        />
        <Stack.Screen 
          name="RestaurantDetail"
          options={{ title: 'Menu' }}
        >
          {props => <RestaurantDetailScreen {...props} addToCart={addToCart} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Cart"
          options={{ title: 'Your Order' }}
        >
          {props => (
            <CartScreen 
              {...props} 
              cart={cart} 
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
