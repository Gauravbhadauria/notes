import React, {useState} from 'react';
import {TouchableOpacity, Text, Animated} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/drawer_screens/Home';
import Notifications from '../screens/drawer_screens/Notifications';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      {/*<DrawerItemList {...props} />*/}
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Notifications"
        onPress={() => props.navigation.navigate('Notifications')}
      />
    </DrawerContentScrollView>
  );
};

const Screens = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: '#000',
              width: 60,
              height: 40,
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.openDrawer()}>
            <Text style={{color: '#fff'}}>Menu</Text>
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default function App() {
   // const scrollx = React.useRef(new Animated.Value(0)).current;
  // const [progress, setProgress] = React.useState(new Animated.Value(0));
  // const translateX = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });
  // const screenStyle = {transform: [{translateX}]};
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType={'slide'}
        overlayColor={'transparent'}
        initialRouteName="Home"
        drawerContent={props => (
          <DrawerContent {...props}  />
        )}>
        <Drawer.Screen name="Screens" component={Screens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
