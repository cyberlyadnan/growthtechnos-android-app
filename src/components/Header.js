import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthStore } from '../store/auth';
import { ProductStore } from '../store/product';
import { observer } from 'mobx-react';

export const Header = observer(({ navigationRef, hideCart, setOpenMenu }) => {
  const {
    state: { cart },
  } = ProductStore;

  return (
    <View style={styles.headerContainer}>
      {/* Left: Menu Icon */}
      <Pressable onPress={() => setOpenMenu(true)} style={styles.iconButton}>
        <FontAwesomeIcon icon={faBars} size={20} color="#fff" />
      </Pressable>

      {/* Center: Logo + Title */}
      <View style={styles.titleContainer}>
        <Svg height="30" width="30" viewBox="0 0 448 512">
          <Path
            fill="#fff"
            d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2c0-71.5 82.5-131 191.7-144.3v43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103v-340l68-33.2v384zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8v-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8L448 291z"
          />
        </Svg>
        <Text style={styles.brandText}>Growth Technos</Text>
      </View>

      {/* Right: Cart & Logout */}
      {/* {!hideCart && (
        <Pressable
          onPress={() => navigationRef.navigate('Cart')}
          style={styles.cartIcon}>
          <Image
            style={{ width: 22, height: 22 }}
            source={require('../../assets/icons/bag.png')}
          />
          {cart.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </Pressable>
      )} */}

      {AuthStore.state.isAuthenticated && (
        <Pressable
          onPress={() => AuthStore.logout()}
          style={styles.iconButton}>
          <Svg height="22" width="22" viewBox="0 0 512 512">
            <Path
              fill="#fff"
              d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"
            />
          </Svg>
        </Pressable>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#0B2E56',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 4,
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  brandText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
    fontWeight: '700',
    fontFamily: 'Poppins-SemiBold',
  },
  cartIcon: {
    width: 28,
    height: 28,
    marginHorizontal: 8,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#e63946',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
