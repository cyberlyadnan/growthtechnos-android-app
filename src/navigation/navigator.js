import React, { useState } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUser,
  faHeart,
  faShoppingCart,
  faThLarge,
  faInfoCircle,
  faTools,
  faBriefcase,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faUser as faUserEmpty,
  faHeart as faHeartEmpty,
} from '@fortawesome/free-regular-svg-icons';

import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Tutorial from '../screens/Onboarding';
import { Product } from '../screens/Product';
import { Cart } from '../screens/Cart';
import { Wishlist } from '../screens/Wishlist';
import { Category } from '../screens/Category';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Order from '../screens/Order';

import Menu from '../components/Menu';
import { Header } from '../components/Header';
import SideMenu from '@chakrahq/react-native-side-menu';
import { AuthStore } from '../store/auth';
import { observer } from 'mobx-react';
import ServiceScreen from '../screens/Service';
import Contact from '../screens/Contact';
import About from '../screens/About';
import Portfolio from '../screens/Portfolio';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const navigationRef = createNavigationContainerRef();

const menu = <Menu navigationRef={navigationRef} />;

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Product" component={Product} />
    <Stack.Screen name="Category" component={Category} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="WishlistScreen" component={Wishlist} />
    <Stack.Screen name="ProductScreen" component={Product} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Orders" component={Orders} />
    <Stack.Screen name="Order" component={Order} />
  </Stack.Navigator>
);

const CategoryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CategoryScreen" component={Category} />
  </Stack.Navigator>
);

const WishlistStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Wishlist" component={Wishlist} />
  </Stack.Navigator>
);



const Tabs = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: Platform.OS === 'ios' ? 25 : 15,
            left: 20,
            right: 20,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 70,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
          },
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesomeIcon icon={faHome} color={focused ? '#284B71' : '#aaa'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesomeIcon icon={faInfoCircle} color={focused ? '#284B71' : '#aaa'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Service"
          component={ServiceScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              // <AnimatedButton>
                <FontAwesomeIcon icon={faTools} color={focused ? '#fff' : '#284B71'} size={28} style={{ backgroundColor: focused ? '#284B71' : '#eee', padding: 18, borderRadius: 50 }} />
              // </AnimatedButton>
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesomeIcon icon={faBriefcase} color={focused ? '#284B71' : '#aaa'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesomeIcon icon={faPhone} color={focused ? '#284B71' : '#aaa'} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};



export const Navigator = observer(() => {
  const [openMenu, setOpenMenu] = useState(false);
  const {
    state: { isAuthenticated },
  } = AuthStore;

  return isAuthenticated ? (
    <SideMenu menu={menu} isOpen={openMenu} autoClosing={true}>
      <Header setOpenMenu={setOpenMenu} navigationRef={navigationRef} />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SideMenu>
  ) : (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Tutorial} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});