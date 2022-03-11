import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Post from './src/Post';
import PostDetail from './src/PostDetail'
import EditPost from './src/EditPost'
import Tab2 from './src/Tab2';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Tab1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Postlist" component={Post} />
      <Stack.Screen name="Postdetail" component={PostDetail} />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  )
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" options={{ headerShown: false }} component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="EditPost" component={EditPost} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;