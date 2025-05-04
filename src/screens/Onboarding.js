import React from 'react';
import { Image, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const { width } = Dimensions.get('window');

const Tutorial = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('login')}
      onDone={() => navigation.navigate('login')}
      containerStyles={{ paddingHorizontal: 20 }}
      titleStyles={{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: '#284B71',
        marginBottom: 10,
      }}
      subTitleStyles={{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#444',
      }}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/icons/add_your_info.png')}
              style={{ width: width * 0.6, height: width * 0.6, resizeMode: 'contain' }}
            />
          ),
          title: 'Create an Account',
          subtitle: 'Quickly sign up and personalize your experience.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/icons/add_to_cart.png')}
              style={{ width: width * 0.6, height: width * 0.6, resizeMode: 'contain' }}
            />
          ),
          title: 'Add to Cart',
          subtitle: 'Browse products and add them to your cart with ease.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/icons/payment.png')}
              style={{ width: width * 0.6, height: width * 0.6, resizeMode: 'contain' }}
            />
          ),
          title: 'Secure Payment',
          subtitle: 'Complete your purchase using secure payment methods.',
        },
      ]}
    />
  );
};

export default Tutorial;
