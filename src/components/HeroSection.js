import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const HeroSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../../assets/images/hero-bg.webp')} // Replace with your image path
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.2)', 'transparent']}
          style={styles.overlay}
        />

        <View style={styles.content}>
          <Text style={styles.tagline}>We Build Beautiful & Scalable Digital Products</Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('ServicesScreen')}
          >
            <Text style={styles.buttonText}>Explore Services</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeroSection;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 400,
      position: 'relative',
    },
    background: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
    },
    content: {
      paddingHorizontal: 24,
      paddingBottom: 60,
    },
    tagline: {
      fontSize: 26,
      fontWeight: '700',
      color: '#FFF6F0',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#06548B',
      paddingVertical: 12,
      paddingHorizontal: 28,
      borderRadius: 30,
      alignSelf: 'flex-start',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
    },
    buttonText: {
      color: '#FFF6F0',
      fontWeight: '700',
      fontSize: 17,
    },
  });
  