import React from 'react';
import { Image, Dimensions, View, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const { width } = Dimensions.get('window');

const Tutorial = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('login')}
      onDone={() => navigation.navigate('login')}
      containerStyles={{
        paddingHorizontal: 24,
        backgroundColor: '#fff',
      }}
      titleStyles={{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: '#000',
        marginBottom: 12,
        textAlign: 'center',
      }}
      subTitleStyles={{
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: '#555',
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: 12,
      }}
      bottomBarColor="#fff"
      imageContainerStyles={{
        paddingBottom: 20,
        marginTop: 20,
      }}
      pageIndexCallback={(index) => console.log('Page:', index)}
      controlStatusBar={false}
      dotStyle={{
        backgroundColor: '#D0D7DE',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
      }}
      activeDotStyle={{
        backgroundColor: '#FF6A00',
        width: 20,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 3,
      }}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/add_to_cart.png')} // Placeholder: use your app logo or splash icon
                style={{
                  width: width * 0.5,
                  height: width * 0.5,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          title: 'Unlock the Future of\nEvent Booking App',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/add_to_cart.png')} // Placeholder: design showing event cards
                style={{
                  width: width * 0.7,
                  height: width * 0.7,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          title: 'Uncover Exciting Upcoming\nand Nearby Events',
          subtitle:
            'Discover local happenings and explore event categories that suit your interests.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/add_to_cart.png')} // Placeholder: people icons and abstract icons
                style={{
                  width: width * 0.65,
                  height: width * 0.65,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          title: 'Let’s Get Started',
          subtitle: 'Already have an account? Sign In',
        },
      ]}
    />
  );
};

export default Tutorial;
